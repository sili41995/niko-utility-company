import { IPaymentFormData } from '@/types/payment.types';
import { FieldErrors } from 'react-hook-form';
import showAmountError from './showAmountError';
import showPaymentSourceNameError from './showPaymentSourceNameError';
import showPaymentDateError from './showPaymentDateError';

const validatePaymentForm = (errors: FieldErrors<IPaymentFormData>): void => {
  showAmountError(errors);
  showPaymentSourceNameError(errors);
  showPaymentDateError(errors);
};

export default validatePaymentForm;
