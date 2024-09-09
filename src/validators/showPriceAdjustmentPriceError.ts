import { Messages } from '@/constants';
import { Price } from '@/types/priceAdjustmentValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPriceAdjustmentPriceError = (errors: FieldErrors<Price>): void => {
  errors.price && toasts.errorToast(Messages.priceReqErr);
};

export default showPriceAdjustmentPriceError;
