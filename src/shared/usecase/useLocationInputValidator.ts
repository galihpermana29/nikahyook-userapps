import { RuleObject } from 'antd/es/form';
import { FormInstance } from 'rc-field-form/lib/interface';

function useLocationInputValidator(form: FormInstance) {
  // NOTE: Add other validator if needed

  const cityValidator = async (_: RuleObject, value: string) => {
    const province = form.getFieldValue('province-select');
    if (province && !value) {
      return Promise.reject(new Error('City cannot be empty'));
    }
    return Promise.resolve();
  };

  return { cityValidator };
}

export default useLocationInputValidator;
