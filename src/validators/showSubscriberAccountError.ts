import { Messages } from '@/constants';
import { SubscriberAccountNumber } from '@/types/subscriberAccount.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showSubscriberAccountError = (
  errors: FieldErrors<SubscriberAccountNumber>
): void => {
  errors.number && toasts.errorToast(Messages.subscriberAccountReqErr);
};

export default showSubscriberAccountError;
