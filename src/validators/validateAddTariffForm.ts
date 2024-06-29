import { INewTariffFormData } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showTariffError from './showTariffError';
import showStartError from './showStartError';

const validateAddTariffForm = (
  errors: FieldErrors<INewTariffFormData>
): void => {
  showTariffError(errors);
  showStartError(errors);
};

export default validateAddTariffForm;
