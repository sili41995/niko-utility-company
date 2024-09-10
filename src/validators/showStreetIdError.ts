import { ErrorMessages } from '@/constants';
import { StreetId } from '@/types/locationValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showStreetIdError = (errors: FieldErrors<StreetId>): void => {
  errors.streetId && toasts.errorToast(ErrorMessages.streetIdReqErr);
};

export default showStreetIdError;
