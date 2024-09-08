import { IPriceAdjustment, PriceAdjustmentData } from './priceAdjustment.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IAccountingInitialState {
  isLoading: boolean;
  lastCalculate: null | Date;
  error: null | string;
}

export interface IAccountingState extends IAccountingInitialState {
  fetchPrices: () => Promise<ILastCalculate | null | undefined>;
  calculatePrices: () => Promise<ILastCalculate | undefined>;
  addPriceAdjustment: (
    data: PriceAdjustmentData
  ) => Promise<IPriceAdjustment | undefined>;
}

export type GetAccountingStateFunc = GetStateFunc<IAccountingState>;

export type SetAccountingStateFunc = SetStateFunc<IAccountingState>;

export interface ILastCalculate {
  lastCalculate: Date;
}

export interface IPricesOperationsProps {
  set: SetAccountingStateFunc;
}

export interface IAddPriceAdjustmentOperationProps {
  set: SetAccountingStateFunc;
  data: PriceAdjustmentData;
  get: GetAccountingStateFunc;
}
