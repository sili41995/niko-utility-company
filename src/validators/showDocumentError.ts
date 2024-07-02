import { Messages } from '@/constants';
import { Document } from '@/types/subscriberAccount.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showDocumentError = (errors: FieldErrors<Document>): void => {
  errors.document && toasts.errorToast(Messages.documentReqErr);
};

export default showDocumentError;
