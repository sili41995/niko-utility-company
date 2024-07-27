import setState from '@/store/setState';
import initialState from './initialState';
import {
  SetAccountingStateFunc,
  GetAccountingStateFunc,
  IAccountingState,
  IPricesInfo,
} from '@/types/accountingStore.types';
import { calculatePrices, fetchPrices, addPriceAdjustment } from './operations';
import { PriceAdjustmentData, IPriceAdjustment } from '@/types/data.types';

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
  addPriceAdjustment: async (
    data: PriceAdjustmentData
  ): Promise<IPriceAdjustment | undefined> =>
    await addPriceAdjustment({
      set: setState({ set, name: 'addPriceAdjustment' }),
      data,
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
