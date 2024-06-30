import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetPricesStateFunc,
  IPricesState,
  SetPricesStateFunc,
  IPricesInfo,
} from '@/types/pricesStore.types';
import { fetchPrices, calculatePrices } from './operations';

const pricesSlice = (
  set: SetPricesStateFunc,
  get: GetPricesStateFunc
): IPricesState => ({
  ...initialState,
  fetchPrices: async (): Promise<IPricesInfo | undefined> =>
    await fetchPrices({
      set: setState({ set, name: 'fetchPrices' }),
      data: undefined,
      get,
    }),
  calculatePrices: async (): Promise<IPricesInfo | undefined> =>
    await calculatePrices({
      set: setState({ set, name: 'calculatePrices' }),
      data: undefined,
      get,
    }),
});

const params = {
  name: 'pricesStore',
};

const pricesStore = {
  store: pricesSlice,
  params,
};

export default pricesStore;
