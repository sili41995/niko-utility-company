import { Messages } from '@/constants';
import { AccountType } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAccountTypeError = (errors: FieldErrors<AccountType>): void => {
  errors.accountType && toasts.errorToast(Messages.accountTypeReqErr);
};

export default showAccountTypeError;
