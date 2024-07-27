import { Messages } from '@/constants';
import { PriceAdjustmentComment } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPriceAdjustmentCommentError = (
  errors: FieldErrors<PriceAdjustmentComment>
): void => {
  errors.comment && toasts.errorToast(Messages.priceReqErr);
};

export default showPriceAdjustmentCommentError;
