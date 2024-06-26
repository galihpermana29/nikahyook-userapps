const useValidateConfirmPassword = ({
  fieldName,
  getFieldValue,
}: {
  fieldName: string;
  getFieldValue: (field: string) => string;
}) => ({
  validator(_: unknown, value: string) {
    if (!value || getFieldValue(fieldName) === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('The two passwords do not match!'));
  },
});

export default useValidateConfirmPassword;
