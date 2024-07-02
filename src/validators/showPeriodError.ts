import { Messages } from '@/constants';
import { Period } from '@/types/subscriberAccount.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPeriodError = (errors: FieldErrors<Period>): void => {
  errors.period && toasts.errorToast(Messages.periodReqErr);
};

export default showPeriodError;
