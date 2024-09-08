import { IPaymentFormData } from '@/types/payment.types';
import { FieldErrors } from 'react-hook-form';
import showAmountError from './showAmountError';
import showPaymentSourceError from './showPaymentSourceError';
import showPaymentDateError from './showPaymentDateError';

const validatePaymentForm = (errors: FieldErrors<IPaymentFormData>): void => {
  showAmountError(errors);
  showPaymentSourceError(errors);
  showPaymentDateError(errors);
};

export default validatePaymentForm;
