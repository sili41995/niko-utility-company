import { Messages } from '@/constants';
import { Date } from '@/types/paymentValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPaymentDateError = (errors: FieldErrors<Date>): void => {
  errors.date && toasts.errorToast(Messages.dateReqErr);
};

export default showPaymentDateError;
