import {
  ISubscriberAccount,
  INewSubscriberAccountData,
  SubscriberAccounts,
  IEditSubscriberAccountData,
} from './subscriberAccount.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPricesInfo {
  lastCalculate: Date;
}

export interface IFetchSubscriberAccountsRes {
  data: SubscriberAccounts;
  count: number;
  filteredCount: number;
}

export interface ISubscriberAccountsInitialState {
  items: SubscriberAccounts;
  count: null | number;
  filteredCount: null | number;
  lastCalculate: null | Date;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IFetchSubscriberAccountsProps {
  set: SetSubscriberAccountsStateFunc;
  data: IFetchSubscriberAccountsFilters;
}

export interface IFetchSubscriberAccountsFilters {
  page?: number;
  limit: number;
  surname: string;
  name: string;
  account: string;
  type: string;
  street: string;
  house: string;
  apartment: string;
}

export interface ISubscriberAccountsState
  extends ISubscriberAccountsInitialState {
  fetchSubscriberAccounts: (
    data: IFetchSubscriberAccountsFilters
  ) => Promise<IFetchSubscriberAccountsRes | undefined>;
  addSubscriberAccount: (
    data: INewSubscriberAccountData
  ) => Promise<ISubscriberAccount | undefined>;
  updateSubscriberAccountById: (
    data: IUpdateSubscriberAccountByIdData
  ) => Promise<ISubscriberAccount | undefined>;
  fetchPrices: () => Promise<IPricesInfo | undefined>;
  calculatePrices: () => Promise<IPricesInfo | undefined>;
}

export type GetSubscriberAccountsStateFunc =
  GetStateFunc<ISubscriberAccountsState>;

export type SetSubscriberAccountsStateFunc =
  SetStateFunc<ISubscriberAccountsState>;

export interface IAddSubscriberAccountProps {
  set: SetSubscriberAccountsStateFunc;
  get: GetSubscriberAccountsStateFunc;
  data: INewSubscriberAccountData;
}

export interface IUpdateSubscriberAccountByIdData {
  data: IEditSubscriberAccountData;
  id: number;
}

export interface IUpdateSubscriberAccountByIdProps {
  set: SetSubscriberAccountsStateFunc;
  get: GetSubscriberAccountsStateFunc;
  data: IUpdateSubscriberAccountByIdData;
}

export interface IPricesOPerationsProps {
  set: SetSubscriberAccountsStateFunc;
}
