'use client';

import GoogleIcon from '@/shared/container/Icon/GoogleIcon';
import { Button, Divider } from 'antd';
import { signIn } from 'next-auth/react';

type OAuthLoginButtonsProps = {
  loading?: boolean;
  withDivider?: boolean;
  dividerText?: string;
};

const OAuthProviders = [
  {
    name: 'Google',
    icon: <GoogleIcon />,
  },
];

export default function OAuthLoginButtons(props: OAuthLoginButtonsProps) {
  return (
    <div className="flex flex-col gap-0 w-full justify-center items-center">
      {props.withDivider && (
        <Divider plain className="text-caption-2">
          {props.dividerText}
        </Divider>
      )}

      {OAuthProviders.map((provider) => (
        <Button
          onClick={() => signIn('google', { callbackUrl: '/discover' })}
          key={`provider-${provider.name}`}
          disabled={props.loading}
          className="w-full flex items-center justify-center gap-2 bg-ny-primary-100 text-ny-primary-500"
          size="large"
          type="primary">
          {provider.icon} Continue with {provider.name}
        </Button>
      ))}
    </div>
  );
}
