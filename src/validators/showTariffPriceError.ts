import { Messages } from '@/constants';
import { Price } from '@/types/tariffValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showTariffPriceError = (errors: FieldErrors<Price>): void => {
  errors.price && toasts.errorToast(Messages.priceReqErr);
};

export default showTariffPriceError;
