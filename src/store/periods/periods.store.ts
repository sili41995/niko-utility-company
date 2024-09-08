import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetPeriodsStateFunc,
  IPeriodsState,
  SetPeriodsStateFunc,
} from '@/types/periodsStore.types';
import { fetchPeriods, addPeriod, addLocalPayment } from './operations';
import { IPeriod, Periods } from '@/types/period.types';
import { IPayment } from '@/types/payment.types';

const periodsSlice = (
  set: SetPeriodsStateFunc,
  get: GetPeriodsStateFunc
): IPeriodsState => ({
  ...initialState,
  fetchPeriods: async (): Promise<Periods | undefined> =>
    await fetchPeriods({
      set: setState({ set, name: 'fetchPeriods' }),
      data: undefined,
      get,
    }),
  addPeriod: async (): Promise<IPeriod | undefined> =>
    await addPeriod({
      set: setState({ set, name: 'addPeriod' }),
      data: undefined,
      get,
    }),
  addLocalPayment: (data: IPayment): IPeriod | undefined =>
    addLocalPayment({
      set: setState({ set, name: 'addLocalPayment' }),
      data,
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
