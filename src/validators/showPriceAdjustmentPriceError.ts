import { ErrorMessages } from '@/constants';
import { Price } from '@/types/priceAdjustmentValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPriceAdjustmentPriceError = (errors: FieldErrors<Price>): void => {
  errors.price && toasts.errorToast(ErrorMessages.priceAdjustmentPriceReqErr);
};

export default showPriceAdjustmentPriceError;
