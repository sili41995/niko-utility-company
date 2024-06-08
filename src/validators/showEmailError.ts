import { Messages } from '@/constants';
import { Email } from '@/types/data';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showEmailError = (errors: FieldErrors<Email>): void => {
  errors.email &&
    toasts.errorToast(
      errors.email.type === 'required'
        ? Messages.emailReqErr
        : Messages.emailRegExpErr
    );
};

export default showEmailError;
