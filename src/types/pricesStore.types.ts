import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPricesInitialState {
  isLoading: boolean;
  lastCalculate: null | Date;
  error: null | string;
}

export interface IPricesState extends IPricesInitialState {
  getLastCalculate: () => Promise<ILastCalculate | null | undefined>;
  calculate: () => Promise<ILastCalculate | undefined>;
}

export type GetPricesStateFunc = GetStateFunc<IPricesState>;

export type SetPricesStateFunc = SetStateFunc<IPricesState>;

export interface ILastCalculate {
  lastCalculate: Date;
}

export interface IPricesOperationsProps {
  set: SetPricesStateFunc;
}
