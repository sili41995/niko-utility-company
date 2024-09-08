import { Messages } from '@/constants';
import { TariffPrice } from '@/types/tariff.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showTariffError = (errors: FieldErrors<TariffPrice>): void => {
  errors.price && toasts.errorToast(Messages.tariffReqErr);
};

export default showTariffError;
