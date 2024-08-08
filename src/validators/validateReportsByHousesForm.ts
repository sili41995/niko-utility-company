import { ITimePeriod } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showDateFromError from './showDateFromError';
import showDateToError from './showDateToError';

const validateReportsByHousesForm = (
  errors: FieldErrors<ITimePeriod>
): void => {
  showDateFromError(errors);
  showDateToError(errors);
};

export default validateReportsByHousesForm;
