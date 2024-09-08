import { Messages } from '@/constants';
import { ContractNumber } from '@/types/contract.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showContractError = (errors: FieldErrors<ContractNumber>): void => {
  errors.number && toasts.errorToast(Messages.contractReqErr);
};

export default showContractError;
