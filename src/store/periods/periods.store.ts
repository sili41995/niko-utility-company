import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetPeriodsStateFunc,
  IPeriodsState,
  SetPeriodsStateFunc,
} from '@/types/periodsStore.types';
import { fetchCurrentPeriod, addPeriod } from './operations';
import { IPeriod } from '@/types/data.types';

const periodsSlice = (
  set: SetPeriodsStateFunc,
  get: GetPeriodsStateFunc
): IPeriodsState => ({
  ...initialState,
  fetchCurrentPeriod: async (): Promise<IPeriod | undefined> =>
    await fetchCurrentPeriod({
      set: setState({ set, name: 'fetchCurrentPeriod' }),
      data: undefined,
      get,
    }),
  addPeriod: async (): Promise<IPeriod | undefined> =>
    await addPeriod({
      set: setState({ set, name: 'addPeriod' }),
      data: undefined,
      get,
    }),
});

const params = {
  name: 'periodsStore',
};

const periodsStore = {
  store: periodsSlice,
  params,
};

export default periodsStore;
