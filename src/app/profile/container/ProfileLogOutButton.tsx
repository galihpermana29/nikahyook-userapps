'use client';

import { clearSessions } from '@/shared/actions/userService';
import ArrowIcon from '@/shared/container/Icon/ArrowIcon';
import SettingIcon from '@/shared/container/Icon/SettingIcon';
import { Button, type ButtonProps } from 'antd';

export default function ProfileLogOutButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      onClick={() => clearSessions()}
      href={props.href}
      className="flex items-center gap-3 text-left py-6 rounded-lg"
      icon={<SettingIcon className="text-ny-error-600" />}>
      <span className="flex flex-grow text-caption-1 font-medium text-ny-error-600">
        Log Out
      </span>

      <ArrowIcon />
    </Button>
  );
}
