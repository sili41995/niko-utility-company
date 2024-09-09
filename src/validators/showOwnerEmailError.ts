import { Messages } from '@/constants';
import { Email } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showOwnerEmailError = (errors: FieldErrors<Email>): void => {
  errors.email && toasts.errorToast(Messages.emailRegExpErr);
};

export default showOwnerEmailError;
