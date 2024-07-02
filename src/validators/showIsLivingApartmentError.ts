import { Messages } from '@/constants';
import { IsLivingApartment } from '@/types/subscriberAccount.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showIsLivingApartmentError = (
  errors: FieldErrors<IsLivingApartment>
): void => {
  errors.isLivingApartment &&
    toasts.errorToast(Messages.isLivingApartmentReqErr);
};

export default showIsLivingApartmentError;
