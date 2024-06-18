import { Messages } from '@/constants';
import { SubscriberAccount } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showSubscriberAccountError = (
  errors: FieldErrors<SubscriberAccount>
): void => {
  errors.subscriberAccount &&
    toasts.errorToast(Messages.subscriberAccountReqErr);
};

export default showSubscriberAccountError;
