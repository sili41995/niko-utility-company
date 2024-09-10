import { Messages } from '@/constants';
import { IErrorMessage } from '@/types/types';

const getPasswordFieldError = (type: string): string => {
  const types: IErrorMessage = {
    required: Messages.passwordReqErr,
    minLength: Messages.passwordMinLengthErr,
    maxLength: Messages.passwordMaxLengthErr,
  };

  return types[type];
};

export default getPasswordFieldError;
