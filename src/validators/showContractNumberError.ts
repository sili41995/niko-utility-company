import { ErrorMessages } from '@/constants';
import { ContractNumber } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showContractNumberError = (errors: FieldErrors<ContractNumber>): void => {
  errors.contractNumber &&
    toasts.errorToast(ErrorMessages.contractNumberReqErr);
};

export default showContractNumberError;
