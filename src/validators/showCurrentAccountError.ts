import { ErrorMessages } from '@/constants';
import { CurrentAccount } from '@/types/generalSettingsValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showCurrentAccountError = (errors: FieldErrors<CurrentAccount>): void => {
  errors.currentAccount &&
    toasts.errorToast(
      errors.currentAccount.type === 'required'
        ? ErrorMessages.currentAccountReqErr
        : ErrorMessages.currentAccountRegExpErr
    );
};

export default showCurrentAccountError;
