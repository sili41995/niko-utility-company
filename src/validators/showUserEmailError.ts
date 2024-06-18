import { Messages } from '@/constants';
import { UserEmail } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showUserEmailError = (errors: FieldErrors<UserEmail>): void => {
  errors.email &&
    toasts.errorToast(
      errors.email.type === 'required'
        ? Messages.emailReqErr
        : Messages.emailRegExpErr
    );
};

export default showUserEmailError;
