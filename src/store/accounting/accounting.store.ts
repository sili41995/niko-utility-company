import setState from '@/store/setState';
import initialState from './initialState';
import {
  SetAccountingStateFunc,
  GetAccountingStateFunc,
  IAccountingState,
  ILastCalculate,
} from '@/types/accountingStore.types';
import { calculatePrices, fetchPrices, addPriceAdjustment } from './operations';
import { PriceAdjustmentData, IPriceAdjustment } from '@/types/data.types';

const accountingSlice = (
  set: SetAccountingStateFunc,
  get: GetAccountingStateFunc
): IAccountingState => ({
  ...initialState,
  fetchPrices: async (): Promise<ILastCalculate | null | undefined> =>
    await fetchPrices({
      set: setState({ set, name: 'fetchPrices' }),
      data: undefined,
      get,
    }),
  calculatePrices: async (): Promise<ILastCalculate | undefined> =>
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
