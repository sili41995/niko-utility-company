import { DateFormats } from '@/constants';
import { IGetCurrentDateParams } from '@/types/types';
import { setDefaultOptions } from 'date-fns';
import { uk } from 'date-fns/locale';
import formatDate from './formatDate';

const getCurrentDateParams = (): IGetCurrentDateParams => {
  setDefaultOptions({ locale: uk });
  const date = new Date();
  const currentMonth = formatDate({ date, dateFormat: DateFormats.fullMonth });
  const currentYear = formatDate({ date, dateFormat: DateFormats.fullYear });
  const firstDayOfMonth = formatDate({
    date,
    dateFormat: DateFormats.monthStart,
  });
  const currentDate = `${currentYear}р. ${currentMonth}`;

  return {
    currentMonth,
    currentYear,
    firstDayOfMonth,
    currentDate,
  };
};

export default getCurrentDateParams;
