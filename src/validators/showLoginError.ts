import { Messages } from '@/constants';
import { Login } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showLoginError = (errors: FieldErrors<Login>): void => {
  errors.login && toasts.errorToast(Messages.loginReqErr);
};

export default showLoginError;
