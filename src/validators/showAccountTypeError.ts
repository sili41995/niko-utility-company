import { Messages } from '@/constants';
import { Category } from '@/types/accountType.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAccountTypeError = (errors: FieldErrors<Category>): void => {
  errors.category && toasts.errorToast(Messages.accountTypeReqErr);
};

export default showAccountTypeError;
