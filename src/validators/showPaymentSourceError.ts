import { Messages } from '@/constants';
import { PaymentSource } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPaymentSourceError = (errors: FieldErrors<PaymentSource>): void => {
  errors.source && toasts.errorToast(Messages.sourceReqErr);
};

export default showPaymentSourceError;
