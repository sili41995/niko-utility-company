import { ErrorMessages } from '@/constants';
import { Period } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPeriodError = (errors: FieldErrors<Period>): void => {
  errors.period && toasts.errorToast(ErrorMessages.periodReqErr);
};

export default showPeriodError;
