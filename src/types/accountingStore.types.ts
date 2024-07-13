import { AccrualAdjustmentData, IAccrualAdjustment } from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPricesInfo {
  lastCalculate: Date;
}

export interface IAccountingInitialState {
  isLoading: boolean;
  lastCalculate: null | Date;
  error: null | string;
}

export interface IAccountingState extends IAccountingInitialState {
  fetchPrices: () => Promise<IPricesInfo | undefined>;
  calculatePrices: () => Promise<IPricesInfo | undefined>;
  addAccrualAdjustment: (
    data: AccrualAdjustmentData
  ) => Promise<IAccrualAdjustment | undefined>;
}

export type GetAccountingStateFunc = GetStateFunc<IAccountingState>;

export type SetAccountingStateFunc = SetStateFunc<IAccountingState>;

export interface IPricesOperationsProps {
  set: SetAccountingStateFunc;
}

export interface IAddAccrualAdjustmentOperationProps {
  set: SetAccountingStateFunc;
  data: AccrualAdjustmentData;
  get: GetAccountingStateFunc;
}
