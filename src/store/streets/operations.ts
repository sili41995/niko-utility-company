import streetsService from '@/services/streets.service';
import operationWrapper from '@/store/streets/operationWrapper';
import { Streets } from '@/types/data.types';
import { IFetchStreetsOperationProps } from '@/types/streetsStore.types';

const fetchStreetsOperation = async ({
  set,
}: IFetchStreetsOperationProps): Promise<Streets | undefined> => {
  const response = await streetsService.fetchStreets();
  set({
    items: response,
    isLoaded: true,
  });
  return response;
};

export const fetchStreets = operationWrapper(fetchStreetsOperation);
