import { Messages } from '@/constants';
import { DateFrom } from '@/types/period.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showDateFromError = (errors: FieldErrors<DateFrom>): void => {
  errors.from && toasts.errorToast(Messages.dateFromReqErr);
};

export default showDateFromError;
