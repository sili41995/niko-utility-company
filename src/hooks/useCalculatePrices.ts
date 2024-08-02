import { formatDate, toasts } from '@/utils';
import { useAccountingStore } from '@/store/store';
import {
  selectIsLoading,
  selectCalculatePrices,
  selectLastCalculate,
  selectFetchPrices,
} from '@/store/accounting/selectors';
import { DateFormats, Messages } from '@/constants';
import { IUseCalculatePrices } from '@/types/hooks.types';
import { useEffect } from 'react';

const useCalculatePrices = (): IUseCalculatePrices => {
  const isLoading = useAccountingStore(selectIsLoading);
  const calculatePrices = useAccountingStore(selectCalculatePrices);
  const lastCalculate = useAccountingStore(selectLastCalculate);
  const fetchPrices = useAccountingStore(selectFetchPrices);
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
