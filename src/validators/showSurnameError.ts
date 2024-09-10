import { ErrorMessages } from '@/constants';
import { Surname } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showSurnameError = (errors: FieldErrors<Surname>): void => {
  errors.surname && toasts.errorToast(ErrorMessages.surnameReqErr);
};

export default showSurnameError;
