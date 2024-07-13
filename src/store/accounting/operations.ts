import accountingService from '@/services/accounting.service';
import operationWrapper from '@/store/accounting/operationWrapper';
import {
  IAddAccrualAdjustmentOperationProps,
  IPricesInfo,
} from '@/types/accountingStore.types';
import { IPricesOperationsProps } from '@/types/accountingStore.types';
import { IAccrualAdjustment } from '@/types/data.types';

const calculatePricesOperation = async ({
  set,
}: IPricesOperationsProps): Promise<IPricesInfo | undefined> => {
  const response = await accountingService.calculatePrices();

  set({
    lastCalculate: response.lastCalculate,
  });

  return response;
};

const fetchPricesOperation = async ({
  set,
}: IPricesOperationsProps): Promise<IPricesInfo | undefined> => {
  const response = await accountingService.fetchPrices();

  set({
    lastCalculate: response.lastCalculate,
  });

  return response;
};

const addAccrualAdjustmentOperation = async ({
  data,
}: IAddAccrualAdjustmentOperationProps): Promise<
  IAccrualAdjustment | undefined
> => {
  const response = await accountingService.addAccrualAdjustment(data);

  return response;
};

export const calculatePrices = operationWrapper(calculatePricesOperation);
export const fetchPrices = operationWrapper(fetchPricesOperation);
export const addAccrualAdjustment = operationWrapper(
  addAccrualAdjustmentOperation
);
