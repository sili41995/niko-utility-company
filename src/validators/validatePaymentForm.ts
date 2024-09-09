import { IPaymentFormData } from '@/types/payment.types';
import { FieldErrors } from 'react-hook-form';
import showAmountError from './showAmountError';
import showSourceError from './showSourceError';
import showPaymentDateError from './showPaymentDateError';

const validatePaymentForm = (errors: FieldErrors<IPaymentFormData>): void => {
  showAmountError(errors);
  showSourceError(errors);
  showPaymentDateError(errors);
};

export default validatePaymentForm;
