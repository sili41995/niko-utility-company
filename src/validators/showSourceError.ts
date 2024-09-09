import { Messages } from '@/constants';
import { Source } from '@/types/paymentValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showSourceError = (errors: FieldErrors<Source>): void => {
  errors.source && toasts.errorToast(Messages.sourceReqErr);
};

export default showSourceError;
