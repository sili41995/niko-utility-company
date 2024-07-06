import { formatDate, toasts } from '@/utils';
import { useSubscriberAccountsStore } from '@/store/store';
import {
  selectError,
  selectIsLoading,
  selectCalculatePrices,
  selectLastCalculate,
  selectFetchPrices,
} from '@/store/subscriberAccounts/selectors';
import { DateFormats, Messages } from '@/constants';
import { IUseCalculatePrices } from '@/types/hooks.types';
import { useEffect } from 'react';

const useCalculatePrices = (): IUseCalculatePrices => {
  const isLoading = useSubscriberAccountsStore(selectIsLoading);
  const error = useSubscriberAccountsStore(selectError);
  const calculatePrices = useSubscriberAccountsStore(selectCalculatePrices);
  const lastCalculate = useSubscriberAccountsStore(selectLastCalculate);
  const fetchPrices = useSubscriberAccountsStore(selectFetchPrices);
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
    error,
  };
};

export default useCalculatePrices;
