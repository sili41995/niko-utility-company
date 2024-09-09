import { IPriceAdjustment, PriceAdjustmentData } from './priceAdjustment.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPriceAdjustmentsInitialState {
  isLoading: boolean;
  lastCalculate: null | Date;
  error: null | string;
}

export interface IPriceAdjustmentsState extends IPriceAdjustmentsInitialState {
  add: (data: PriceAdjustmentData) => Promise<IPriceAdjustment | undefined>;
}

export type GetPriceAdjustmentsStateFunc = GetStateFunc<IPriceAdjustmentsState>;

export type SetPriceAdjustmentsStateFunc = SetStateFunc<IPriceAdjustmentsState>;

export interface IAddPriceAdjustmentOperationProps {
  set: SetPriceAdjustmentsStateFunc;
  data: PriceAdjustmentData;
  get: GetPriceAdjustmentsStateFunc;
}
