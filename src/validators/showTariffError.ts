import { Messages } from '@/constants';
import { Tariff } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showTariffError = (errors: FieldErrors<Tariff>): void => {
  errors.tariff && toasts.errorToast(Messages.tariffReqErr);
};

export default showTariffError;
