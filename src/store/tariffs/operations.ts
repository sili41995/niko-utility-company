import tariffsService from '@/services/tariffs.service';
import operationWrapper from '@/store/tariffs/operationWrapper';
import { FullTariffs, ITariff } from '@/types/tariff.types';
import { IAddProps, IGetAllProps } from '@/types/tariffsStore.types';
import { sortTariffs } from '@/utils';

const getAllOperation = async ({
  set,
}: IGetAllProps): Promise<FullTariffs | undefined> => {
  const response = await tariffsService.getAll();

  set({
    items: response,
    isLoaded: true,
  });

  return response;
};

const addOperation = async ({
  data,
  get,
  set,
}: IAddProps): Promise<ITariff | undefined> => {
  const { items: tariffs } = get();

  const response = await tariffsService.add(data);
  const sortedTariffs = sortTariffs([...tariffs, response]);
  set({ items: sortedTariffs });

  return response;
};

export const getAll = operationWrapper(getAllOperation);
export const add = operationWrapper(addOperation);
