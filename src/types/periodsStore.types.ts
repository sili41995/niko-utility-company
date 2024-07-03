import { IPeriod } from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPeriodsInitialState {
  currentPeriod: null | IPeriod;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IPeriodsState extends IPeriodsInitialState {
  fetchCurrentPeriod: () => Promise<IPeriod | undefined>;
  addPeriod: () => Promise<IPeriod | undefined>;
}

export type GetPeriodsStateFunc = GetStateFunc<IPeriodsState>;

export type SetPeriodsStateFunc = SetStateFunc<IPeriodsState>;

export interface IFetchCurrentPeriodProps {
  set: SetPeriodsStateFunc;
}
