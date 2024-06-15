import { Messages } from '@/constants';
import { MFI } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showMFIError = (errors: FieldErrors<MFI>): void => {
  errors.mfi &&
    toasts.errorToast(
      errors.mfi.type === 'required'
        ? Messages.mfiReqErr
        : Messages.mfiLengthErr
    );
};

export default showMFIError;
