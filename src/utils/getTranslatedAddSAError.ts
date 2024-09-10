import { DbErrors, ErrorMessages } from '@/constants';

const getTranslatedAddSAError = (message: string): string => {
  const isDuplicateSAError =
    message.toLowerCase() === DbErrors.duplicateSubscriberAccount.toLowerCase();
  const isDuplicateContractError =
    message.toLowerCase() === DbErrors.duplicateContract.toLowerCase();

  return isDuplicateSAError
    ? ErrorMessages.duplicateSubscriberAccountErr
    : isDuplicateContractError
    ? ErrorMessages.duplicateContractErr
    : message;
};

export default getTranslatedAddSAError;
