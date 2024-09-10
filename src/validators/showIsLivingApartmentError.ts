import { ErrorMessages } from '@/constants';
import { IsLivingApartment } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showIsLivingApartmentError = (
  errors: FieldErrors<IsLivingApartment>
): void => {
  errors.isLivingApartment &&
    toasts.errorToast(ErrorMessages.isLivingApartmentReqErr);
};

export default showIsLivingApartmentError;
