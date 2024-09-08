import { IPayment, Payments } from './payment.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPaymentsInitialState {
  items: Payments;
  count: null | number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IPaymentsState extends IPaymentsInitialState {
  fetchPayments: (data: IFetchPaymentsFilters) => Promise<IGetAll | undefined>;
  addPayment: (data: NewPaymentData) => Promise<IPayment | undefined>;
}

export interface IFetchPaymentsFilters {
  page?: number;
  limit: number;
}

export interface IGetAll {
  data: Payments;
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
  data: NewPaymentData;
}
