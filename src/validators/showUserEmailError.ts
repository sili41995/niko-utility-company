import { ErrorMessages } from '@/constants';
import { Email } from '@/types/userValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showUserEmailError = (errors: FieldErrors<Email>): void => {
  errors.email &&
    toasts.errorToast(
      errors.email.type === 'required'
        ? ErrorMessages.emailReqErr
        : ErrorMessages.emailRegExpErr
    );
};

export default showUserEmailError;
