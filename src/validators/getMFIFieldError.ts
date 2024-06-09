import { Messages } from '@/constants';
import { IErrorMessage } from '@/types/types';

const getMFIFieldError = (type: string): string => {
  const types: IErrorMessage = {
    required: Messages.mfiReqErr,
    minLength: Messages.mfiLengthErr,
    maxLength: Messages.mfiLengthErr,
  };

  return types[type];
};

export default getMFIFieldError;
