'use client';

import { Spin } from 'antd';

const LoginForm = ({
  onLogin,
  loading,
}: {
  onLogin: any;
  loading: boolean;
}) => {
  return (
    <div>
      <div>login form</div>
      {loading ? (
        <Spin />
      ) : (
        <button className="border-2" onClick={onLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginForm;
