import { ITimePeriodFormData } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showDateFromError from './showDateFromError';
import showDateToError from './showDateToError';

const validateCalcByStreetsForm = (
  errors: FieldErrors<ITimePeriodFormData>
): void => {
  showDateFromError(errors);
  showDateToError(errors);
};

export default validateCalcByStreetsForm;
