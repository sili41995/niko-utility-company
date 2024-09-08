import { IPayment } from './payment.types';
import { IPeriod, Periods, FullPeriods } from './period.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPeriodsInitialState {
  items: FullPeriods;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IPeriodsState extends IPeriodsInitialState {
  fetchPeriods: () => Promise<Periods | undefined>;
  addPeriod: () => Promise<IPeriod | undefined>;
  addLocalPayment: (data: IPayment) => IPeriod | undefined;
}

export type GetPeriodsStateFunc = GetStateFunc<IPeriodsState>;

export type SetPeriodsStateFunc = SetStateFunc<IPeriodsState>;

export interface IFetchPeriodsProps {
  set: SetPeriodsStateFunc;
}

export interface IAddPeriodProps {
  set: SetPeriodsStateFunc;
  get: GetPeriodsStateFunc;
}

export interface IAddPaymentProps {
  set: SetPeriodsStateFunc;
  get: GetPeriodsStateFunc;
  data: IPayment;
}
