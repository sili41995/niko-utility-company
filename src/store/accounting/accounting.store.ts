import setState from '@/store/setState';
import initialState from './initialState';
import {
  SetAccountingStateFunc,
  GetAccountingStateFunc,
  IAccountingState,
  IPricesInfo,
} from '@/types/accountingStore.types';
import { calculatePrices, fetchPrices } from './operations';

const accountingSlice = (
  set: SetAccountingStateFunc,
  get: GetAccountingStateFunc
): IAccountingState => ({
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
  name: 'accountingStore',
};

const accountingStore = {
  store: accountingSlice,
  params,
};

export default accountingStore;
