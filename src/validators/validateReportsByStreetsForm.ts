import { ITimePeriod } from '@/types/period.types';
import { FieldErrors } from 'react-hook-form';
import showFromError from './showFromError';
import showToError from './showToError';

const validateReportsByStreetsForm = (
  errors: FieldErrors<ITimePeriod>
): void => {
  showFromError(errors);
  showToError(errors);
};

export default validateReportsByStreetsForm;
