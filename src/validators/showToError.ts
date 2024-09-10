import { ErrorMessages } from '@/constants';
import { To } from '@/types/periodValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showToError = (errors: FieldErrors<To>): void => {
  errors.to && toasts.errorToast(ErrorMessages.toReqErr);
};

export default showToError;
