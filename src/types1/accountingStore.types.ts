import { PriceAdjustmentData, IPriceAdjustment } from './data.types';
import { GetStateFunc, SetStateFunc } from '../types/store.types';

export interface IPricesOperationsProps {
  set: SetAccountingStateFunc;
}

export interface IAddPriceAdjustmentOperationProps {
  set: SetAccountingStateFunc;
  data: PriceAdjustmentData;
  get: GetAccountingStateFunc;
}
