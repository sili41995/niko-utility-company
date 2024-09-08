import { ITariffFormData } from '@/types/tariff.types';
import { FieldErrors } from 'react-hook-form';
import showTariffError from './showTariffError';
import showStartError from './showStartError';

const validateAddTariffForm = (errors: FieldErrors<ITariffFormData>): void => {
  showTariffError(errors);
  showStartError(errors);
};

export default validateAddTariffForm;
