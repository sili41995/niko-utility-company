import { ErrorMessages } from '@/constants';
import { Name } from '@/types/paymentValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPaymentSourceNameError = (errors: FieldErrors<Name>): void => {
  errors.name && toasts.errorToast(ErrorMessages.paymentSourceNameReqErr);
};

export default showPaymentSourceNameError;
