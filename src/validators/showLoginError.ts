import { Messages } from '@/constants';
import { Login } from '@/types/user.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showLoginError = (errors: FieldErrors<Login>): void => {
  errors.login &&
    toasts.errorToast(
      errors.login.type === 'required'
        ? Messages.loginReqErr
        : Messages.loginRegExpErr
    );
};

export default showLoginError;
