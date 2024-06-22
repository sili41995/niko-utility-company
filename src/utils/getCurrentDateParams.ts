import { DateFormats } from '@/constants';
import { IGetCurrentDateParams } from '@/types/types';
import { format, setDefaultOptions } from 'date-fns';
import { uk } from 'date-fns/locale';

const getCurrentDateParams = (): IGetCurrentDateParams => {
  setDefaultOptions({ locale: uk });
  const date = new Date();
  const currentMonth = format(date, DateFormats.fullMonth);
  const currentYear = format(date, DateFormats.fullYear);
  const firstDayOfMonth = format(date, DateFormats.fullDate);
  const currentDate = `${currentYear}р. ${currentMonth}`;

  return {
    currentMonth,
    currentYear,
    firstDayOfMonth,
    currentDate,
  };
};

export default getCurrentDateParams;
