import tariffsService from '@/services/tariffs.service';
import operationWrapper from '@/store/tariffs/operationWrapper';
import { ITariff, Tariffs } from '@/types/data.types';
import {
  IAddTariffProps,
  IFetchTariffsProps,
} from '@/types/tariffsStore.types';

const fetchTariffsOperation = async ({
  set,
}: IFetchTariffsProps): Promise<Tariffs | undefined> => {
  const response = await tariffsService.fetchTariffs();

  set({
    items: response,
    isLoaded: true,
  });
  return response;
};

const fetchCurrentTariffsOperation = async ({
  set,
}: IFetchTariffsProps): Promise<Tariffs | undefined> => {
  const response = await tariffsService.fetchCurrentTariffs();

  set({
    items: response,
    isLoaded: true,
  });
  return response;
};

const addTariffOperation = async ({
  data,
}: IAddTariffProps): Promise<ITariff | undefined> => {
  const response = await tariffsService.addTariff(data);
  return response;
};

export const fetchTariffs = operationWrapper(fetchTariffsOperation);
export const fetchCurrentTariffs = operationWrapper(
  fetchCurrentTariffsOperation
);
export const addTariff = operationWrapper(addTariffOperation);
