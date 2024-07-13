import { IAccrualAdjustmentFormData } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showPriceError from './showPriceError';
import showAccrualAdjustmentDateError from './showAccrualAdjustmentDateError';
import showAccrualAdjustmentCommentError from './showAccrualAdjustmentCommentError';

const validateAccrualsAdjustmentForm = (
  errors: FieldErrors<IAccrualAdjustmentFormData>
): void => {
  showPriceError(errors);
  showAccrualAdjustmentDateError(errors);
  showAccrualAdjustmentCommentError(errors);
};

export default validateAccrualsAdjustmentForm;
