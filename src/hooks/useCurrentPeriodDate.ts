import { selectPeriods } from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { getPeriodDate } from '@/utils';

const useCurrentPeriodDate = (): string => {
  const periods = usePeriodsStore(selectPeriods);

  const currentPeriod = periods.find(({ isCurrentPeriod }) => isCurrentPeriod);
  const currentPeriodDate = getPeriodDate(currentPeriod);

  return currentPeriodDate;
};

export default useCurrentPeriodDate;
