import { Messages } from '@/constants';
import { Apartment } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showApartmentError = (errors: FieldErrors<Apartment>): void => {
  errors.apartment && toasts.errorToast(Messages.apartmentReqErr);
};

export default showApartmentError;
