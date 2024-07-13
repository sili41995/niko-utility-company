import { selectPeriods } from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import useSetSearchParams from './useSetSearchParams';
import { DateFormats, SearchParamsKeys } from '@/constants';
import { IPeriod } from '@/types/data.types';
import { formatDate } from '@/utils';

const useTargetPeriod = (): IPeriod => {
  const periods = usePeriodsStore(selectPeriods);
  const { searchParams } = useSetSearchParams();
  const targetMonth = searchParams.get(SearchParamsKeys.month) ?? '';

  const targetPeriod = periods.find(({ start }) => {
    const periodMonth = formatDate({
      date: start,
      dateFormat: DateFormats.monthNumber,
    });

    return periodMonth === targetMonth;
  })!;
  const currentPeriod = periods.find(({ isCurrentPeriod }) => isCurrentPeriod)!;

  return targetMonth ? targetPeriod : currentPeriod;
};

export default useTargetPeriod;
