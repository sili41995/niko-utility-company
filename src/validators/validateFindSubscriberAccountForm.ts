import { FieldErrors } from 'react-hook-form';
import showNumberError from './showNumberError';
import { SubscriberAccountNumber } from '@/types/subscriberAccountValidator.types';

const validateFindSubscriberAccountForm = (
  errors: FieldErrors<SubscriberAccountNumber>
): void => {
  showNumberError(errors);
};

export default validateFindSubscriberAccountForm;
