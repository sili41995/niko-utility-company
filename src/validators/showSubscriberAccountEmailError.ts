import { Messages } from '@/constants';
import { OwnerEmail } from '@/types/owner.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showOwnerEmailError = (errors: FieldErrors<OwnerEmail>): void => {
  errors.email && toasts.errorToast(Messages.emailRegExpErr);
};

export default showOwnerEmailError;
