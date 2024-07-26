import { Messages } from '@/constants';
import { DateTo } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showDateToError = (errors: FieldErrors<DateTo>): void => {
  errors.to && toasts.errorToast(Messages.dateToReqErr);
};

export default showDateToError;
