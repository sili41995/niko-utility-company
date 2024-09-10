import { ErrorMessages } from '@/constants';
import { Start } from '@/types/tariffValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showStartError = (errors: FieldErrors<Start>): void => {
  errors.start && toasts.errorToast(ErrorMessages.startReqErr);
};

export default showStartError;
