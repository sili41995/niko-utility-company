import { ErrorMessages } from '@/constants';
import { AdditionalPhone } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAdditionalPhoneError = (
  errors: FieldErrors<AdditionalPhone>
): void => {
  errors.additionalPhone &&
    toasts.errorToast(
      errors.additionalPhone.type === 'required'
        ? ErrorMessages.additionalPhoneReqErr
        : ErrorMessages.additionalPhoneRegExpErr
    );
};

export default showAdditionalPhoneError;
