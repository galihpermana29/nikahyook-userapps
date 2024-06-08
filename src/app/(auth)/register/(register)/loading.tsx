import { Button } from 'antd';
import OAuthLoginButtons from '../../container/OAuthLoginButtons';
import CreateAccountFormLoading from './container/CreateAccountFormLoading';

export default function RegisterLoading() {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col gap-3">
        <CreateAccountFormLoading />
      </div>

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
