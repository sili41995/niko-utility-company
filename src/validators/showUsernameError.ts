import { Messages } from '@/constants';
import { Username } from '@/types/data';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showUsernameError = (errors: FieldErrors<Username>): void => {
  errors.username && toasts.errorToast(Messages.usernameReqErr);
};

export default showUsernameError;
