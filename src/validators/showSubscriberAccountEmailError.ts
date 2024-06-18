import { Messages } from '@/constants';
import { SubscriberAccountEmail } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showSubscriberAccountEmailError = (
  errors: FieldErrors<SubscriberAccountEmail>
): void => {
  errors.email && toasts.errorToast(Messages.emailRegExpErr);
};

export default showSubscriberAccountEmailError;
