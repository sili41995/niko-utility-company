import { ErrorMessages } from '@/constants';
import { MinDebt } from '@/types/reportValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showMinDebtError = (errors: FieldErrors<MinDebt>): void => {
  errors.minDebt && toasts.errorToast(ErrorMessages.minDebtReqErr);
};

export default showMinDebtError;
