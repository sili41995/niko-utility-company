import { Messages } from '@/constants';
import { Passport } from '@/types/subscriberAccount.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPassportError = (errors: FieldErrors<Passport>): void => {
  errors.passport && toasts.errorToast(Messages.passportReqErr);
};

export default showPassportError;
