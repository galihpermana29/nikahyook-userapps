import GoogleIcon from '@/shared/container/Icon/GoogleIcon';
import { Button, Divider } from 'antd';

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
    <>
      {props.withDivider && (
        <Divider plain className="text-caption-2">
          {props.dividerText}
        </Divider>
      )}

      {OAuthProviders.map((provider) => (
        <Button
          key={`provider-${provider.name}`}
          disabled={props.loading}
          className="w-full flex items-center justify-center gap-2 bg-ny-primary-100 text-ny-primary-500"
          size="large"
          type="primary">
          {provider.icon} Continue with {provider.name}
        </Button>
      ))}
    </>
  );
}
