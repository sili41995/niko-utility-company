import { Messages } from '@/constants';
import { Phone } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPhoneError = (errors: FieldErrors<Phone>): void => {
  errors.phone && toasts.errorToast(Messages.phoneReqErr);
};

export default showPhoneError;
