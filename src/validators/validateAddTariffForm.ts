import { ITariffFormData } from '@/types/tariff.types';
import { FieldErrors } from 'react-hook-form';
import showTariffPriceError from './showTariffPriceError';
import showStartError from './showStartError';

const validateAddTariffForm = (errors: FieldErrors<ITariffFormData>): void => {
  showTariffPriceError(errors);
  showStartError(errors);
};

export default validateAddTariffForm;
