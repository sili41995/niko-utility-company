import { Messages } from '@/constants';
import { MinDebt } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showMinDebtError = (errors: FieldErrors<MinDebt>): void => {
  errors.minDebt && toasts.errorToast(Messages.minDebtReqErr);
};

export default showMinDebtError;
