import { Messages } from '@/constants';
import { PaymentDate } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPaymentDateError = (errors: FieldErrors<PaymentDate>): void => {
  errors.date && toasts.errorToast(Messages.dateReqErr);
};

export default showPaymentDateError;
