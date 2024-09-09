import pricesService from '@/services/prices.service';
import operationWrapper from '@/store/prices/operationWrapper';
import {
  ILastCalculate,
  IPricesOperationsProps,
} from '@/types/pricesStore.types';

const calculateOperation = async ({
  set,
}: IPricesOperationsProps): Promise<ILastCalculate | undefined> => {
  const response = await pricesService.calculate();

  set({
    lastCalculate: response.lastCalculate,
  });

  return response;
};

const getLastCalculateOperation = async ({
  set,
}: IPricesOperationsProps): Promise<ILastCalculate | null | undefined> => {
  const response = await pricesService.getLastCalculate();

  set({
    lastCalculate: response?.lastCalculate,
  });

  return response;
};

export const calculate = operationWrapper(calculateOperation);
export const getLastCalculate = operationWrapper(getLastCalculateOperation);
