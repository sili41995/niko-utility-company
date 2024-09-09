import { Messages } from '@/constants';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showCommentError = (errors: FieldErrors<Comment>): void => {
  errors.residents && toasts.errorToast(Messages.residentsReqErr);
};

export default showCommentError;
