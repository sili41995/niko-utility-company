import { formatDate, toasts } from '@/utils';
import { DateFormats, Messages } from '@/constants';
import { IUseCalculatePrices } from '@/types/hooks.types';
import { useEffect } from 'react';
import { usePricesStore } from '@/store/store';
import {
  selectCalculate,
  selectGetLastCalculate,
  selectIsLoading,
  selectLastCalculate,
} from '@/store/prices/selectors';

const useCalculatePrices = (): IUseCalculatePrices => {
  const isLoading = usePricesStore(selectIsLoading);
  const calculatePrices = usePricesStore(selectCalculate);
  const lastCalculate = usePricesStore(selectLastCalculate);
  const fetchPrices = usePricesStore(selectGetLastCalculate);
  const lastPricesCalculate = lastCalculate
    ? formatDate({
        date: lastCalculate,
        dateFormat: DateFormats.fullDate,
      })
    : '-';

  const calculate = async (): Promise<void> => {
    try {
      await calculatePrices();
      toasts.successToast(Messages.calculatePricesSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  return {
    lastPricesCalculate,
    isLoading,
    calculatePrices: calculate,
  };
};

export default useCalculatePrices;
