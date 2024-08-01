import { Messages } from '@/constants';
import { DocumentName } from '@/types/subscriberAccount.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showDocumentNameError = (errors: FieldErrors<DocumentName>): void => {
  errors.name && toasts.errorToast(Messages.documentNameReqErr);
};

export default showDocumentNameError;
