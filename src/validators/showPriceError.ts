import { Messages } from '@/constants';
import { Price } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPriceError = (errors: FieldErrors<Price>): void => {
  errors.price && toasts.errorToast(Messages.priceReqErr);
};

export default showPriceError;
