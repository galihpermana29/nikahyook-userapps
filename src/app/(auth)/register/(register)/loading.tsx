import { Button } from 'antd';
import OAuthLoginButtons from '../../container/OAuthLoginButtons';
import CreateAccountFormContainer from './container/CreateAccountFormContainer';
import CreateAccountFormLoading from './container/CreateAccountFormLoading';

export default function RegisterLoading() {
  return (
    <section className="w-full">
      <CreateAccountFormContainer
        disabled
        className="w-full flex flex-col gap-3"
        layout="vertical">
        <CreateAccountFormLoading />
      </CreateAccountFormContainer>

      <OAuthLoginButtons loading withDivider dividerText="Or continue with" />

      <div className="text-caption-1 mt-5 text-center w-full">
        Already signed up?{' '}
        <Button disabled type="link" className="text-ny-primary-500 mx-0 px-0">
          Login
        </Button>
      </div>
    </section>
  );
}
