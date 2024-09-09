import { Messages } from '@/constants';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showDocumentNameError = (errors: FieldErrors<DocumentName>): void => {
  errors.residents && toasts.errorToast(Messages.residentsReqErr);
};

export default showDocumentNameError;
