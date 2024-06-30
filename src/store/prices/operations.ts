import pricesService from '@/services/prices.service';
import operationWrapper from '@/store/prices/operationWrapper';
import { IPricesOPerationsProps, IPricesInfo } from '@/types/pricesStore.types';

const fetchPricesOperation = async ({
  set,
}: IPricesOPerationsProps): Promise<IPricesInfo | undefined> => {
  const response = await pricesService.fetchPrices();

  set({
    count: response.count,
    lastCalculate: response.updatedAt,
    isLoaded: true,
  });

  return response;
};

const calculatePricesOperation = async ({
  set,
}: IPricesOPerationsProps): Promise<IPricesInfo | undefined> => {
  const response = await pricesService.calculatePrices();

  set({
    count: response.count,
    lastCalculate: response.updatedAt,
  });

  return response;
};

export const fetchPrices = operationWrapper(fetchPricesOperation);
export const calculatePrices = operationWrapper(calculatePricesOperation);
