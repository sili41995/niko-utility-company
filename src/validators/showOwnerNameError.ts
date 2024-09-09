import { Messages } from '@/constants';
import { Name } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showOwnerNameError = (errors: FieldErrors<Name>): void => {
  errors.name && toasts.errorToast(Messages.nameReqErr);
};

export default showOwnerNameError;
