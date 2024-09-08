import { Messages } from '@/constants';
import { ContractDate } from '@/types/contract.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showContractDateError = (errors: FieldErrors<ContractDate>): void => {
  errors.date && toasts.errorToast(Messages.contractDateReqErr);
};

export default showContractDateError;
