import { Messages } from '@/constants';
import { Residents } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showResidentsError = (errors: FieldErrors<Residents>): void => {
  errors.residents && toasts.errorToast(Messages.residentsReqErr);
};

export default showResidentsError;
