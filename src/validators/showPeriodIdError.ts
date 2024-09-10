import { ErrorMessages } from '@/constants';
import { PeriodId } from '@/types/reportValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPeriodIdError = (errors: FieldErrors<PeriodId>): void => {
  errors.periodId && toasts.errorToast(ErrorMessages.periodIdReqErr);
};

export default showPeriodIdError;
