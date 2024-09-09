import { Messages } from '@/constants';
import { IErrorMessage } from '@/types/types';

const getPasswordFieldError = (type: string): string => {
  const types: IErrorMessage = {
    required: Messages.passReqErr,
    minLength: Messages.passMinLengthErr,
    maxLength: Messages.passMaxLengthErr,
  };

  return types[type];
};

export default getPasswordFieldError;
