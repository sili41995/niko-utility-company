import { Messages } from '@/constants';
import { Street } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showStreetIdError = (errors: FieldErrors<Street>): void => {
  errors.streetId && toasts.errorToast(Messages.streetReqErr);
};

export default showStreetIdError;
