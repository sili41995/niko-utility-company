import { IPriceAdjustmentFormData } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showPriceError from './showPriceError';
import showPriceAdjustmentDateError from './showPriceAdjustmentDateError';
import showPriceAdjustmentCommentError from './showPriceAdjustmentCommentError';

const validatePriceAdjustmentForm = (
  errors: FieldErrors<IPriceAdjustmentFormData>
): void => {
  showPriceError(errors);
  showPriceAdjustmentDateError(errors);
  showPriceAdjustmentCommentError(errors);
};

export default validatePriceAdjustmentForm;
