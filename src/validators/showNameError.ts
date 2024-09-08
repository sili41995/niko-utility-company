import { Messages } from '@/constants';
import { OwnerName } from '@/types/owner.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showNameError = (errors: FieldErrors<OwnerName>): void => {
  errors.name && toasts.errorToast(Messages.nameReqErr);
};

export default showNameError;
