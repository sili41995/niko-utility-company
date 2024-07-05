import { DateFormats } from '@/constants';
import { selectCurrentPeriod } from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { formatDate } from '@/utils';

const useCurrentPeriod = (): string => {
  const { start = new Date() } = usePeriodsStore(selectCurrentPeriod) || {};
  const currentPeriodDate = formatDate({
    date: start,
    dateFormat: DateFormats.period,
  });

  return currentPeriodDate;
};

export default useCurrentPeriod;
