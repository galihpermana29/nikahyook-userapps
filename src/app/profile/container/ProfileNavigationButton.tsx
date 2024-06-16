import ArrowIcon from '@/shared/container/Icon/ArrowIcon';
import SettingIcon from '@/shared/container/Icon/SettingIcon';
import { Button, type ButtonProps } from 'antd';

interface IProfileNavigationButtonProps extends ButtonProps {
  label: string;
}

export default function ProfileNavigationButton(
  props: IProfileNavigationButtonProps
) {
  return (
    <Button
      {...props}
      href={props.href}
      className="flex items-center gap-3 text-left py-6 rounded-lg"
      icon={<SettingIcon />}>
      <span className="flex flex-grow text-caption-1 font-medium">
        {props.label}
      </span>

      <ArrowIcon />
    </Button>
  );
}
