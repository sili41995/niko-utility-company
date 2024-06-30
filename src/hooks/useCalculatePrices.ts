import { formatDate, getCurrentDateParams } from '@/utils';
import { usePricesStore } from '@/store/store';
import {
  selectError,
  selectIsLoading,
  selectCalculatePrices,
  selectLastCalculate,
} from '@/store/prices/selectors';
import { DateFormats } from '@/constants';
import { IUseCalculatePrices } from '@/types/hooks.types';

const useCalculatePrices = (): IUseCalculatePrices => {
  const isLoading = usePricesStore(selectIsLoading);
  const error = usePricesStore(selectError);
  const calculatePrices = usePricesStore(selectCalculatePrices);
  const lastCalculate = usePricesStore(selectLastCalculate);
  const lastPricesCalculate = lastCalculate
    ? formatDate({
        date: lastCalculate,
        dateFormat: DateFormats.fullDate,
      })
    : '-';
  const { currentDate } = getCurrentDateParams();

  return {
    currentDate,
    lastPricesCalculate,
    isLoading,
    calculatePrices,
    error,
  };
};

export default useCalculatePrices;
