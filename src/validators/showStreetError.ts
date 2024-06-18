import { Messages } from '@/constants';
import { Street } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showStreetError = (errors: FieldErrors<Street>): void => {
  errors.street && toasts.errorToast(Messages.streetReqErr);
};

export default showStreetError;
