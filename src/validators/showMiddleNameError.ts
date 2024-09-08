import { Messages } from '@/constants';
import { MiddleName } from '@/types/owner.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showMiddleNameError = (errors: FieldErrors<MiddleName>): void => {
  errors.middleName && toasts.errorToast(Messages.middleNameReqErr);
};

export default showMiddleNameError;
