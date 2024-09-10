import { ErrorMessages } from '@/constants';
import { SubscriberAccountNumber } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showNumberError = (
  errors: FieldErrors<SubscriberAccountNumber>
): void => {
  errors.number && toasts.errorToast(ErrorMessages.numberReqErr);
};

export default showNumberError;
