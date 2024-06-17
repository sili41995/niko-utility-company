import { DateFormats } from '@/constants';
import { IGetCurrentDateParams, Period } from '@/types/types';
import { addMonths, format, setDefaultOptions, startOfMonth } from 'date-fns';
import { uk } from 'date-fns/locale';

const getCurrentDateParams = (): IGetCurrentDateParams => {
  setDefaultOptions({ locale: uk });
  const currentDate = new Date();
  const currentMonth = format(currentDate, DateFormats.fullMonth);
  const currentYear = format(currentDate, DateFormats.fullYear);
  const firstDayOfMonth = format(currentDate, DateFormats.fullDate);
  const currentPeriod = format(currentDate, DateFormats.period);
  const nextMonthDate = startOfMonth(addMonths(currentDate, 1));
  const nextPeriod = format(nextMonthDate, DateFormats.period);
  const period: Period = [
    { period: currentPeriod, title: 'Поточний період' },
    { period: nextPeriod, title: 'Наступний період' },
  ];

  return { currentMonth, currentYear, firstDayOfMonth, period };
};

export default getCurrentDateParams;
