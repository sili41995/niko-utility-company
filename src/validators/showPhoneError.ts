import { Messages } from '@/constants';
import { Phone } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPhoneError = (errors: FieldErrors<Phone>): void => {
  errors.phone &&
    toasts.errorToast(
      errors.phone.type === 'required'
        ? Messages.phoneReqErr
        : Messages.phoneRegExpErr
    );
};

export default showPhoneError;
