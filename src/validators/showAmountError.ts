import { Messages } from '@/constants';
import { Amount } from '@/types/payment.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAmountError = (errors: FieldErrors<Amount>): void => {
  errors.amount && toasts.errorToast(Messages.priceReqErr);
};

export default showAmountError;
