import { Messages } from '@/constants';
import { PriceAdjustmentDate } from '@/types/priceAdjustment.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPriceAdjustmentDateError = (
  errors: FieldErrors<PriceAdjustmentDate>
): void => {
  errors.date && toasts.errorToast(Messages.priceReqErr);
};

export default showPriceAdjustmentDateError;
