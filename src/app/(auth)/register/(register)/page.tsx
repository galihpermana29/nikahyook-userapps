import Link from 'next/link';
import CreateAccountFormContainer from './container/CreateAccountFormContainer';
import CreateAccountForm from './container/Form/CreateAccountForm';

export default function RegisterPage() {
  return (
    <section className="w-full">
      <CreateAccountFormContainer
        className="w-full flex flex-col gap-3"
        layout="vertical">
        <CreateAccountForm />
      </CreateAccountFormContainer>

      <div className="text-caption-1 mt-5 text-center w-full">
        Already signed up?{' '}
        <Link href="/login" className="text-ny-primary-500">
          Login
        </Link>
      </div>
    </section>
  );
}
