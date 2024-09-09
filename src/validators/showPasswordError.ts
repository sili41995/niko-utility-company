import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';
import getPasswordFieldError from './getPasswordFieldError';
import { Password } from '@/types/userValidator.types';

const showPasswordError = (errors: FieldErrors<Password>): void => {
  errors.password &&
    toasts.errorToast(getPasswordFieldError(errors.password.type));
};

export default showPasswordError;
