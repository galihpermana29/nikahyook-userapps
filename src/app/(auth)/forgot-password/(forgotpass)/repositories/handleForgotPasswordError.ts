import { message } from 'antd';

const handleForgotPasswordError = (error: string | Error) => {
  if (error instanceof Error) {
    message.error(error.message);
  } else {
    if (error === 'DATA_NOT_FOUND') {
      message.error('Account with this email is not found!');
    } else {
      message.error(error as string);
    }
  }
};

export default handleForgotPasswordError;
