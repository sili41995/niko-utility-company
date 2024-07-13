import { Messages } from '@/constants';
import { AccrualAdjustmentDate } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAccrualAdjustmentDateError = (
  errors: FieldErrors<AccrualAdjustmentDate>
): void => {
  errors.date && toasts.errorToast(Messages.priceReqErr);
};

export default showAccrualAdjustmentDateError;
