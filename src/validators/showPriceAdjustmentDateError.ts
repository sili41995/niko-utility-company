import { Messages } from '@/constants';
import { Date } from '@/types/priceAdjustmentValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPriceAdjustmentDateError = (errors: FieldErrors<Date>): void => {
  errors.date && toasts.errorToast(Messages.dateReqErr);
};

export default showPriceAdjustmentDateError;
