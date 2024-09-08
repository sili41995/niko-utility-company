import { IReportsBySubscribersFormData } from '@/types/report.types';
import { FieldErrors } from 'react-hook-form';
import showPeriodIdError from './showPeriodIdError';
import showHouseIdError from './showHouseIdError';
import showStreetIdError from './showStreetIdError';
import showMinDebtError from './showMinDebtError';

const validateReportsBySubscribersForm = (
  errors: FieldErrors<IReportsBySubscribersFormData>
) => {
  showPeriodIdError(errors);
  showHouseIdError(errors);
  showStreetIdError(errors);
  showMinDebtError(errors);
};

export default validateReportsBySubscribersForm;
