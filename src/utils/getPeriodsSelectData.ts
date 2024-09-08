import { Periods } from '@/types/period.types';
import formatDate from './formatDate';
import { DateFormats } from '@/constants';
import { SelectData } from '@/types/types';

const getPeriodsSelectData = (periods: Periods): SelectData =>
  periods.map(({ start, id }) => ({
    value: String(id),
    title: formatDate({
      date: start,
      dateFormat: DateFormats.period,
    }),
  }));

export default getPeriodsSelectData;
