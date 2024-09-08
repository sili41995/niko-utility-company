import { Password } from '@/types/user.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';
import getPassFieldError from './getPassFieldError';

const showPassError = (errors: FieldErrors<Password>): void => {
  errors.password && toasts.errorToast(getPassFieldError(errors.password.type));
};

export default showPassError;
