import { ErrorMessages } from '@/constants';
import { DocumentName } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showDocumentNameError = (errors: FieldErrors<DocumentName>): void => {
  errors.documentName && toasts.errorToast(ErrorMessages.documentNameReqErr);
};

export default showDocumentNameError;
