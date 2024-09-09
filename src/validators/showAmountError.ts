import { Messages } from '@/constants';
import { Amount } from '@/types/paymentValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAmountError = (errors: FieldErrors<Amount>): void => {
  errors.amount && toasts.errorToast(Messages.amountReqErr);
};

export default showAmountError;
