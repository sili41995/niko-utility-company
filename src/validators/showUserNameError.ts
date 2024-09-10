import { Messages } from '@/constants';
import { Name } from '@/types/userValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showUserNameError = (errors: FieldErrors<Name>): void => {
  errors.name && toasts.errorToast(Messages.nameReqErr);
};

export default showUserNameError;
