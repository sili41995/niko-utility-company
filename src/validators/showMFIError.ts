import { MFI } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';
import getMFIFieldError from './getMFIFieldError';

const showMFIError = (errors: FieldErrors<MFI>): void => {
  errors.mfi && toasts.errorToast(getMFIFieldError(errors.mfi.type));
};

export default showMFIError;
