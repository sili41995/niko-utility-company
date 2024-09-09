import { Messages } from '@/constants';
import { ContractNumber } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showContractNumberError = (errors: FieldErrors<ContractNumber>): void => {
  errors.contractNumber && toasts.errorToast(Messages.contractNumberReqErr);
};

export default showContractNumberError;
