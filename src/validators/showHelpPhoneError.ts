import { ErrorMessages } from '@/constants';
import { HelpPhone } from '@/types/generalSettingsValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showHelpPhoneError = (errors: FieldErrors<HelpPhone>): void => {
  errors.helpPhone &&
    toasts.errorToast(
      errors.helpPhone.type === 'required'
        ? ErrorMessages.helpPhoneReqErr
        : ErrorMessages.helpPhoneRegExpErr
    );
};

export default showHelpPhoneError;
