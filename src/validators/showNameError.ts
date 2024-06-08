import { Messages } from '@/constants';
import { Name } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showNameError = (errors: FieldErrors<Name>): void => {
  errors.name && toasts.errorToast(Messages.nameReqErr);
};

export default showNameError;
