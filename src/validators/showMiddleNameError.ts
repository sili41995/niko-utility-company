import { ErrorMessages } from '@/constants';
import { MiddleName } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showMiddleNameError = (errors: FieldErrors<MiddleName>): void => {
  errors.middleName && toasts.errorToast(ErrorMessages.middleNameReqErr);
};

export default showMiddleNameError;
