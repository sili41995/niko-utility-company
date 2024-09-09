import { Messages } from '@/constants';
import { HelpPhone } from '@/types/generalSettingsValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showHelpPhoneError = (errors: FieldErrors<HelpPhone>): void => {
  errors.helpPhone &&
    toasts.errorToast(
      errors.helpPhone.type === 'required'
        ? Messages.helpPhoneReqErr
        : Messages.helpPhoneRegExpErr
    );
};

export default showHelpPhoneError;
