import { FormInstance, Rule } from 'antd/es/form';

function useFormInputRule(form: FormInstance) {
  const minPriceRules: Rule[] = [
    {
      validator: (_, value) => {
        if (!value) {
          return Promise.resolve();
        }
        if (isNaN(value)) {
          return Promise.reject(new Error('Min price must be a number'));
        }
        if (value < 0) {
          return Promise.reject(new Error('Min price must be at least 0'));
        }
        return Promise.resolve();
      },
    },
  ];

  const maxPriceRules: Rule[] = [
    {
      validator: (_, value) => {
        const minPrice = form.getFieldValue('min_price');

        if (!value) {
          return Promise.resolve();
        }
        if (isNaN(value)) {
          return Promise.reject(new Error('Max price must be a number'));
        }
        if (value < 0) {
          return Promise.reject(new Error('Max price must be at least 0'));
        }
        if (minPrice !== undefined && value <= minPrice) {
          return Promise.reject(
            new Error('Max price must be greater than Min price')
          );
        }
        return Promise.resolve();
      },
    },
  ];

  return { minPriceRules, maxPriceRules };
}

export default useFormInputRule;
