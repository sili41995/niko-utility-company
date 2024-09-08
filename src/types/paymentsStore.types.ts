import { FullPayments, IPayment, IPaymentData } from './payment.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPaymentsInitialState {
  items: FullPayments;
  count: null | number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IPaymentsState extends IPaymentsInitialState {
  fetchPayments: (
    data: IFetchPaymentsFilters
  ) => Promise<IFetchPaymentsRes | undefined>;
  addPayment: (data: IPaymentData) => Promise<IPayment | undefined>;
}

export interface IFetchPaymentsFilters {
  page?: number;
  limit: number;
}

export interface IFetchPaymentsRes {
  data: FullPayments;
  count: number;
}

export type GetPaymentsStateFunc = GetStateFunc<IPaymentsState>;

export type SetPaymentsStateFunc = SetStateFunc<IPaymentsState>;

export interface IFetchPaymentsProps {
  set: SetPaymentsStateFunc;
  data: IFetchPaymentsFilters;
}

export interface IAddPaymentProps {
  set: SetPaymentsStateFunc;
  get: GetPaymentsStateFunc;
  data: IPaymentData;
}
