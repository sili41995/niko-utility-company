import { ErrorMessages } from '@/constants';
import { From } from '@/types/periodValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showFromError = (errors: FieldErrors<From>): void => {
  errors.from && toasts.errorToast(ErrorMessages.fromReqErr);
};

export default showFromError;
