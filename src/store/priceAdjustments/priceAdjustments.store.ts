import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetPriceAdjustmentsStateFunc,
  IPriceAdjustmentsState,
  SetPriceAdjustmentsStateFunc,
} from '@/types/priceAdjustmentsStore.types';
import {
  IPriceAdjustment,
  PriceAdjustmentData,
} from '@/types/priceAdjustment.types';
import { add } from './operations';

const priceAdjustmentsSlice = (
  set: SetPriceAdjustmentsStateFunc,
  get: GetPriceAdjustmentsStateFunc
): IPriceAdjustmentsState => ({
  ...initialState,
  add: async (
    data: PriceAdjustmentData
  ): Promise<IPriceAdjustment | undefined> =>
    await add({
      set: setState({ set, name: 'add' }),
      data,
      get,
    }),
});

const params = {
  name: 'priceAdjustmentsStore',
};

const priceAdjustmentsStore = {
  store: priceAdjustmentsSlice,
  params,
};

export default priceAdjustmentsStore;
