import { ErrorMessages } from '@/constants';
import { ContractDate } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showContractDateError = (errors: FieldErrors<ContractDate>): void => {
  errors.contractDate && toasts.errorToast(ErrorMessages.contractDateReqErr);
};

export default showContractDateError;
