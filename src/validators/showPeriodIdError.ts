import { Messages } from '@/constants';
import { PeriodId } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showPeriodIdError = (errors: FieldErrors<PeriodId>): void => {
  errors.periodId && toasts.errorToast(Messages.periodIdReqErr);
};

export default showPeriodIdError;
