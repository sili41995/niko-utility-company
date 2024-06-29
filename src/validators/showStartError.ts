import { Messages } from '@/constants';
import { Start } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showStartError = (errors: FieldErrors<Start>): void => {
  errors.start && toasts.errorToast(Messages.startReqErr);
};

export default showStartError;
