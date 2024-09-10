import { ErrorMessages } from '@/constants';
import { Residents } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showResidentsError = (errors: FieldErrors<Residents>): void => {
  errors.residents && toasts.errorToast(ErrorMessages.residentsReqErr);
};

export default showResidentsError;
