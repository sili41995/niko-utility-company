import {
  ISubscriberAccount,
  INewSubscriberAccount,
  SubscriberAccounts,
  IEditSubscriberAccountData,
} from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IFetchSubscriberAccountsRes {
  data: SubscriberAccounts;
  count: number;
  filteredCount: number;
}

export interface ISubscriberAccountsInitialState {
  items: SubscriberAccounts;
  count: null | number;
  filteredCount: null | number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IFetchSubscriberAccountsOperationProps {
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
    data: INewSubscriberAccount
  ) => Promise<ISubscriberAccount | undefined>;
  updateSubscriberAccountById: (
    data: IUpdateSubscriberAccountByIdData
  ) => Promise<ISubscriberAccount | undefined>;
}

export type GetSubscriberAccountsStateFunc =
  GetStateFunc<ISubscriberAccountsState>;

export type SetSubscriberAccountsStateFunc =
  SetStateFunc<ISubscriberAccountsState>;

export interface IAddSubscriberAccountProps {
  set: SetSubscriberAccountsStateFunc;
  get: GetSubscriberAccountsStateFunc;
  data: INewSubscriberAccount;
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
