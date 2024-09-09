import priceAdjustmentsService from '@/services/priceAdjustments.service';
import { IPriceAdjustment } from '@/types/priceAdjustment.types';
import { IAddPriceAdjustmentOperationProps } from '@/types/priceAdjustmentsStore.types';
import operationWrapper from './operationWrapper';

const addOperation = async ({
  data,
}: IAddPriceAdjustmentOperationProps): Promise<
  IPriceAdjustment | undefined
> => {
  const response = await priceAdjustmentsService.add(data);

  return response;
};

export const add = operationWrapper(addOperation);
