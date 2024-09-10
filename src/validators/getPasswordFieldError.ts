import { ErrorMessages } from '@/constants';
import { IErrorMessage } from '@/types/types';

const getPasswordFieldError = (type: string): string => {
  const types: IErrorMessage = {
    required: ErrorMessages.passwordReqErr,
    minLength: ErrorMessages.passwordMinLengthErr,
    maxLength: ErrorMessages.passwordMaxLengthErr,
  };

  return types[type];
};

export default getPasswordFieldError;
