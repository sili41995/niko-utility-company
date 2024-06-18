import { Messages } from '@/constants';
import { Contract } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showContractError = (errors: FieldErrors<Contract>): void => {
  errors.contract && toasts.errorToast(Messages.contractReqErr);
};

export default showContractError;
