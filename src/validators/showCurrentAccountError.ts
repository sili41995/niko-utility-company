import { Messages } from '@/constants';
import { CurrentAccount } from '@/types/generalSettingsValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showCurrentAccountError = (errors: FieldErrors<CurrentAccount>): void => {
  errors.currentAccount &&
    toasts.errorToast(
      errors.currentAccount.type === 'required'
        ? Messages.currentAccountReqErr
        : Messages.currentAccountRegExpErr
    );
};

export default showCurrentAccountError;
