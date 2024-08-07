import { DateFormats } from '@/constants';
import { selectPeriods } from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { IUsePeriodsRange } from '@/types/hooks.types';
import { formatDate } from '@/utils';

const usePeriodsRange = (): IUsePeriodsRange => {
  const periods = usePeriodsStore(selectPeriods);

  const firstPeriodIndex = periods.length - 1;
  const firstPeriod = periods[firstPeriodIndex];
  const nimMonthDate = formatDate({
    date: firstPeriod.start,
    dateFormat: DateFormats.month,
  });

  const lastMonth = periods[0];
  const maxMonthDate = formatDate({
    date: lastMonth.start,
    dateFormat: DateFormats.month,
  });

  return { nimMonthDate, maxMonthDate };
};

export default usePeriodsRange;
