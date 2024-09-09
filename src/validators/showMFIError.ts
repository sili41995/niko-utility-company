import { FieldErrors } from 'react-hook-form';

const showMfiError = (errors: FieldErrors<Mfi>): void => {
  errors.mfi &&
    toasts.errorToast(
      errors.mfi.type === 'required'
        ? Messages.mfiReqErr
        : Messages.mfiLengthErr
    );
};

export default showMfiError;
