import setState from '@/store/setState';
import initialState from './initialState';
import { Streets } from '@/types/street.types';
import {
  GetStreetsStateFunc,
  IStreetsState,
  SetStreetsStateFunc,
} from '@/types/streetsStore.types';
import { fetchStreets } from './operations';

const streetsSlice = (
  set: SetStreetsStateFunc,
  get: GetStreetsStateFunc
): IStreetsState => ({
  ...initialState,
  fetchStreets: async (): Promise<Streets | undefined> =>
    await fetchStreets({
      set: setState({ set, name: 'fetchStreets' }),
      data: undefined,
      get,
    }),
});

const params = {
  name: 'streetsStore',
};

const streetsStore = {
  store: streetsSlice,
  params,
};

export default streetsStore;
