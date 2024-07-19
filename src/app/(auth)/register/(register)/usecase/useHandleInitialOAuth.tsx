import { useEffect } from 'react';
import { getOAuthCookies, removeOAuthCookies } from './removeOAuthCookies';
import { useSearchParams } from 'next/navigation';
import { FormInstance, message } from 'antd';

const useHandleInitialOAuth = (form: FormInstance<any>) => {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const email = searchParams.get('email');

  /**
   * INFO: this use effect will remove oAuthCookie
   */

  useEffect(() => {
    const initialAction = async () => {
      const oAuthData = await getOAuthCookies();
      if (oAuthData) {
        message.info("Your google account hasn't registered yet");
      }

      if (name) {
        removeOAuthCookies();
        form.setFieldsValue({ name, email });
      }
    };
    initialAction();
  }, []);
};

export default useHandleInitialOAuth;
