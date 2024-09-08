import { Messages } from '@/constants';
import { UserName } from '@/types/user.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showFullNameError = (errors: FieldErrors<UserName>): void => {
  errors.name && toasts.errorToast(Messages.fullNameReqErr);
};

export default showFullNameError;
