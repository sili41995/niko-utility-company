import {
  selectFetchCurrentPeriod,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { useEffect } from 'react';

const useCurrentPeriodData = (): boolean => {
  const fetchCurrentPeriod = usePeriodsStore(selectFetchCurrentPeriod);
  const isLoadingPeriods = usePeriodsStore(selectIsLoading);
  const isLoadedPeriods = usePeriodsStore(selectIsLoaded);
  const isLoadingData = !isLoadedPeriods && isLoadingPeriods;

  useEffect(() => {
    fetchCurrentPeriod();
  }, [fetchCurrentPeriod]);

  return isLoadingData;
};

export default useCurrentPeriodData;
