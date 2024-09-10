import { ErrorMessages } from '@/constants';
import { Name } from '@/types/userValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showUserNameError = (errors: FieldErrors<Name>): void => {
  errors.name && toasts.errorToast(ErrorMessages.fullNameReqErr);
};

export default showUserNameError;
