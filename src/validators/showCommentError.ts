import { Messages } from '@/constants';
import { Comment } from '@/types/subscriberAccount.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showCommentError = (errors: FieldErrors<Comment>): void => {
  errors.comment && toasts.errorToast(Messages.commentReqErr);
};

export default showCommentError;
