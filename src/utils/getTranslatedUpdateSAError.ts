import { DbErrors, ErrorMessages } from '@/constants';

const getTranslatedUpdateSAError = (message: string): string => {
  const isDuplicateDocumentErr =
    message.toLowerCase() === DbErrors.duplicateDocument.toLowerCase();

  return isDuplicateDocumentErr ? ErrorMessages.duplicateDocumentErr : message;
};

export default getTranslatedUpdateSAError;
