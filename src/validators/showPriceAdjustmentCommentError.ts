import { ErrorMessages } from '@/constants';
import { Comment } from '@/types/priceAdjustmentValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPriceAdjustmentCommentError = (
  errors: FieldErrors<Comment>
): void => {
  errors.comment && toasts.errorToast(ErrorMessages.commentReqErr);
};

export default showPriceAdjustmentCommentError;
