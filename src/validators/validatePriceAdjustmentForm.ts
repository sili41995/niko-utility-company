import { IPriceAdjustmentFormData } from '@/types/priceAdjustment.types';
import { FieldErrors } from 'react-hook-form';
import showPriceAdjustmentPriceError from './showPriceAdjustmentPriceError';
import showPriceAdjustmentDateError from './showPriceAdjustmentDateError';
import showPriceAdjustmentCommentError from './showPriceAdjustmentCommentError';

const validatePriceAdjustmentForm = (
  errors: FieldErrors<IPriceAdjustmentFormData>
): void => {
  showPriceAdjustmentPriceError(errors);
  showPriceAdjustmentDateError(errors);
  showPriceAdjustmentCommentError(errors);
};

export default validatePriceAdjustmentForm;
