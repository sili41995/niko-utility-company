import { Messages } from '@/constants';
import { AccrualAdjustmentComment } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAccrualAdjustmentCommentError = (
  errors: FieldErrors<AccrualAdjustmentComment>
): void => {
  errors.comment && toasts.errorToast(Messages.priceReqErr);
};

export default showAccrualAdjustmentCommentError;
