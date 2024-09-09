import setState from '@/store/setState';
import initialState from './initialState';
import { Houses } from '@/types/house.types';
import {
  GetHousesStateFunc,
  IHousesState,
  SetHousesStateFunc,
} from '@/types/housesStore.types';
import { fetchHouses } from './operations';

const housesSlice = (
  set: SetHousesStateFunc,
  get: GetHousesStateFunc
): IHousesState => ({
  ...initialState,
  fetchHouses: async (streetId): Promise<Houses | undefined> =>
    await fetchHouses({
      set: setState({ set, name: 'fetchHouses' }),
      data: streetId,
      get,
    }),
});

const params = {
  name: 'housesStore',
};

const housesStore = {
  store: housesSlice,
  params,
};

export default housesStore;
