import { DateFormats } from '@/constants';
import { IGetCurrentDateParams } from '@/types/types';
import { format, setDefaultOptions } from 'date-fns';
import { uk } from 'date-fns/locale';

const getCurrentDateParams = (): IGetCurrentDateParams => {
  setDefaultOptions({ locale: uk });
  const currentDate = new Date();
  const currentMonth = format(currentDate, DateFormats.fullMonth);
  const currentYear = format(currentDate, DateFormats.fullYear);
  const firstDayOfMonth = format(currentDate, DateFormats.fullDate);

  return { currentMonth, currentYear, firstDayOfMonth };
};

export default getCurrentDateParams;
