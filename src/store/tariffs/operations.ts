import tariffsService from '@/services/tariffs.service';
import operationWrapper from '@/store/tariffs/operationWrapper';
import { FullTariffs, ITariff } from '@/types/tariff.types';
import {
  IAddTariffProps,
  IFetchTariffsProps,
} from '@/types/tariffsStore.types';
import { sortTariffs } from '@/utils';

const fetchTariffsOperation = async ({
  set,
}: IFetchTariffsProps): Promise<FullTariffs | undefined> => {
  const response = await tariffsService.fetchTariffs();

  set({
    items: response,
    isLoaded: true,
  });

  return response;
};

const addTariffOperation = async ({
  data,
  get,
  set,
}: IAddTariffProps): Promise<ITariff | undefined> => {
  const { items: tariffs } = get();

  const response = await tariffsService.addTariff(data);
  const sortedTariffs = sortTariffs([...tariffs, response]);
  set({ items: sortedTariffs });

  return response;
};

export const fetchTariffs = operationWrapper(fetchTariffsOperation);
export const addTariff = operationWrapper(addTariffOperation);
