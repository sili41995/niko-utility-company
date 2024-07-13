import accountingService from '@/services/accounting.service';
import operationWrapper from '@/store/accounting/operationWrapper';
import { IPricesInfo } from '@/types/accountingStore.types';
import { IPricesOPerationsProps } from '@/types/accountingStore.types';

const calculatePricesOperation = async ({
  set,
}: IPricesOPerationsProps): Promise<IPricesInfo | undefined> => {
  const response = await accountingService.calculatePrices();

  set({
    lastCalculate: response.lastCalculate,
  });

  return response;
};

const fetchPricesOperation = async ({
  set,
}: IPricesOPerationsProps): Promise<IPricesInfo | undefined> => {
  const response = await accountingService.fetchPrices();

  set({
    lastCalculate: response.lastCalculate,
  });

  return response;
};

export const calculatePrices = operationWrapper(calculatePricesOperation);
export const fetchPrices = operationWrapper(fetchPricesOperation);
