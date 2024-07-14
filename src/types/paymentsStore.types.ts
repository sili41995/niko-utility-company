import { IPayment, NewPaymentData, Payments } from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IFetchPaymentsFilters {
  page?: number;
  limit: number;
}

export interface IFetchPaymentsRes {
  data: Payments;
  count: number;
}

export interface IFetchPaymentsProps {
  set: SetPaymentsStateFunc;
  data: IFetchPaymentsFilters;
}

export interface IPaymentsInitialState {
  items: Payments;
  count: null | number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IPaymentsState extends IPaymentsInitialState {
  fetchPayments: (
    data: IFetchPaymentsFilters
  ) => Promise<IFetchPaymentsRes | undefined>;
  addPayment: (data: NewPaymentData) => Promise<IPayment | undefined>;
}

export type GetPaymentsStateFunc = GetStateFunc<IPaymentsState>;

export type SetPaymentsStateFunc = SetStateFunc<IPaymentsState>;

export interface IAddPaymentProps {
  set: SetPaymentsStateFunc;
  get: GetPaymentsStateFunc;
  data: NewPaymentData;
}
