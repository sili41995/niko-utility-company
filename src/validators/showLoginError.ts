import { ErrorMessages } from '@/constants';
import { Login } from '@/types/userValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showLoginError = (errors: FieldErrors<Login>): void => {
  errors.login &&
    toasts.errorToast(
      errors.login.type === 'required'
        ? ErrorMessages.loginReqErr
        : ErrorMessages.loginRegExpErr
    );
};

export default showLoginError;
