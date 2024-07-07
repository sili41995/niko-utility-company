import { DateFormats } from '@/constants';
import formatDate from './formatDate';
import { IPeriod } from '@/types/data.types';

const getPeriodDate = (period?: IPeriod): string => {
  const { start = new Date() } = period ?? {};
  const periodDate = formatDate({
    date: start,
    dateFormat: DateFormats.period,
  });

  return periodDate;
};

export default getPeriodDate;
