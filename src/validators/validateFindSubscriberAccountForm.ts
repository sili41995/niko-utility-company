import { SubscriberAccountNumber } from '@/types/subscriberAccount.types';
import { FieldErrors } from 'react-hook-form';
import showSubscriberAccountError from './showSubscriberAccountError';

const validateFindSubscriberAccountForm = (
  errors: FieldErrors<SubscriberAccountNumber>
): void => {
  showSubscriberAccountError(errors);
};

export default validateFindSubscriberAccountForm;
