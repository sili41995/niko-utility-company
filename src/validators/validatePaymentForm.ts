import { INewPaymentFormData } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showAmountError from './showAmountError';
import showPaymentSourceError from './showPaymentSourceError';
import showPaymentDateError from './showPaymentDateError';

const validatePaymentForm = (
  errors: FieldErrors<INewPaymentFormData>
): void => {
  showAmountError(errors);
  showPaymentSourceError(errors);
  showPaymentDateError(errors);
};

export default validatePaymentForm;
