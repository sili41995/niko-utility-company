import { Messages } from '@/constants';
import { Comment } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showDocumentCommentError = (errors: FieldErrors<Comment>): void => {
  errors.comment && toasts.errorToast(Messages.commentReqErr);
};

export default showDocumentCommentError;
