import {
  selectFetchPeriods,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { useEffect } from 'react';

const usePeriodsData = (): boolean => {
  const fetchPeriods = usePeriodsStore(selectFetchPeriods);
  const isLoadingPeriods = usePeriodsStore(selectIsLoading);
  const isLoadedPeriods = usePeriodsStore(selectIsLoaded);
  const isLoadingData = !isLoadedPeriods && isLoadingPeriods;

  useEffect(() => {
    fetchPeriods();
  }, [fetchPeriods]);

  return isLoadingData;
};

export default usePeriodsData;
