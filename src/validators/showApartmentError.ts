import { ErrorMessages } from '@/constants';
import { Apartment } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showApartmentError = (errors: FieldErrors<Apartment>): void => {
  errors.apartment && toasts.errorToast(ErrorMessages.apartmentReqErr);
};

export default showApartmentError;
