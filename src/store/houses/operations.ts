import housesService from '@/services/houses.service';
import operationWrapper from '@/store/houses/operationWrapper';
import { Houses } from '@/types/house.types';
import { IFetchHousesOperationProps } from '@/types/housesStore.types';

const fetchHousesOperation = async ({
  set,
  data,
}: IFetchHousesOperationProps): Promise<Houses | undefined> => {
  const response = await housesService.fetchHouses(data);
  set({
    items: response,
    isLoaded: true,
  });
  return response;
};

export const fetchHouses = operationWrapper(fetchHousesOperation);
