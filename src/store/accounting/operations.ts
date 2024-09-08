import accountingService from '@/services/accounting.service';
import operationWrapper from '@/store/accounting/operationWrapper';
import {
  IAddPriceAdjustmentOperationProps,
  ILastCalculate,
} from '@/types/accountingStore.types';
import { IPricesOperationsProps } from '@/types/accountingStore.types';
import { IPriceAdjustment } from '@/types/data.types';

const calculatePricesOperation = async ({
  set,
}: IPricesOperationsProps): Promise<ILastCalculate | undefined> => {
  const response = await accountingService.calculatePrices();

  set({
    lastCalculate: response.lastCalculate,
  });

  return response;
};

const fetchPricesOperation = async ({
  set,
}: IPricesOperationsProps): Promise<ILastCalculate | null | undefined> => {
  const response = await accountingService.fetchPrices();

  set({
    lastCalculate: response?.lastCalculate,
  });

  return response;
};

const addPriceAdjustmentOperation = async ({
  data,
}: IAddPriceAdjustmentOperationProps): Promise<
  IPriceAdjustment | undefined
> => {
  const response = await accountingService.addPriceAdjustment(data);

  return response;
};

export const calculatePrices = operationWrapper(calculatePricesOperation);
export const fetchPrices = operationWrapper(fetchPricesOperation);
export const addPriceAdjustment = operationWrapper(addPriceAdjustmentOperation);
