import { SubscriberAccount } from '@/types/subscriberAccount.types';
import { FieldErrors } from 'react-hook-form';
import showSubscriberAccountError from './showSubscriberAccountError';

const validateFindSubscriberAccountForm = (
  errors: FieldErrors<SubscriberAccount>
): void => {
  showSubscriberAccountError(errors);
};

export default validateFindSubscriberAccountForm;
