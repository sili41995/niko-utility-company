import initialState from './initialState';
import {
  GetPricesStateFunc,
  ILastCalculate,
  IPricesState,
  SetPricesStateFunc,
} from '@/types/pricesStore.types';
import { calculate, getLastCalculate } from './operations';
import setState from '@/store/setState';

const pricesSlice = (
  set: SetPricesStateFunc,
  get: GetPricesStateFunc
): IPricesState => ({
  ...initialState,
  getLastCalculate: async (): Promise<ILastCalculate | null | undefined> =>
    await getLastCalculate({
      set: setState({ set, name: 'getLastCalculate' }),
      data: undefined,
      get,
    }),
  calculate: async (): Promise<ILastCalculate | undefined> =>
    await calculate({
      set: setState({ set, name: 'calculate' }),
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
