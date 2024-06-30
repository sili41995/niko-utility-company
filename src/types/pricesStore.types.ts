import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPricesInfo {
  count: number;
  updatedAt: Date;
}

export type PricesRequestFunc = () => Promise<IPricesInfo | undefined>;

export interface IPricesInitialState {
  count: null | number;
  lastCalculate: null | Date;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IPricesState extends IPricesInitialState {
  fetchPrices: PricesRequestFunc;
  calculatePrices: PricesRequestFunc;
}

export type GetPricesStateFunc = GetStateFunc<IPricesState>;

export type SetPricesStateFunc = SetStateFunc<IPricesState>;

export interface IPricesOPerationsProps {
  set: SetPricesStateFunc;
}
