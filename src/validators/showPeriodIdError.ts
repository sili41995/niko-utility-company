import { Messages } from '@/constants';
import { PeriodIdString } from '@/types/report.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPeriodIdError = (errors: FieldErrors<PeriodIdString>): void => {
  errors.periodId && toasts.errorToast(Messages.periodIdReqErr);
};

export default showPeriodIdError;
