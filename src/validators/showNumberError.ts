import { Messages } from '@/constants';
import { SubscriberAccountNumber } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showNumberError = (
  errors: FieldErrors<SubscriberAccountNumber>
): void => {
  errors.number && toasts.errorToast(Messages.numberReqErr);
};

export default showNumberError;
