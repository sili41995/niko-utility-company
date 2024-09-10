import { ErrorMessages } from '@/constants';
import { Mfi } from '@/types/generalSettingsValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showMfiError = (errors: FieldErrors<Mfi>): void => {
  errors.mfi &&
    toasts.errorToast(
      errors.mfi.type === 'required'
        ? ErrorMessages.mfiReqErr
        : ErrorMessages.mfiLengthErr
    );
};

export default showMfiError;
