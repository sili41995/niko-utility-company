import { Periods, SelectData } from '@/types/data.types';
import formatDate from './formatDate';
import { DateFormats } from '@/constants';

const getPeriodsSelectData = (periods: Periods): SelectData =>
  periods.map(({ start, id }) => ({
    value: String(id),
    title: formatDate({
      date: start,
      dateFormat: DateFormats.period,
    }),
  }));

export default getPeriodsSelectData;
