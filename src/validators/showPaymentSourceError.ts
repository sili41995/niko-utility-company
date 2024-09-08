import { Messages } from '@/constants';
import { IPaymentSource } from '@/types/paymentSource.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPaymentSourceError = (errors: FieldErrors<IPaymentSource>): void => {
  errors.source && toasts.errorToast(Messages.sourceReqErr);
};

export default showPaymentSourceError;
