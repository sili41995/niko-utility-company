import { selectPeriods } from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { IPeriod } from '@/types/period.types';

const useCurrentPeriod = (): IPeriod | undefined => {
  const periods = usePeriodsStore(selectPeriods);
  const currentPeriod = periods.find(({ isCurrentPeriod }) => isCurrentPeriod);

  return currentPeriod;
};

export default useCurrentPeriod;
