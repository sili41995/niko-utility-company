import {
  ISubscriberAccount,
  NewSubscriberAccount,
  SubscriberAccounts,
} from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IFetchSubscriberAccountsRes {
  data: SubscriberAccounts;
  count: number;
}

export interface ISubscriberAccountsInitialState {
  items: SubscriberAccounts;
  count: null | number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IFetchSubscriberAccountsOperationProps {
  set: SetSubscriberAccountsStateFunc;
  data: IFetchSubscriberAccountsFilters;
}

export interface IFetchSubscriberAccountsFilters {
  page: number;
  limit: number;
}

export interface ISubscriberAccountsState
  extends ISubscriberAccountsInitialState {
  fetchSubscriberAccounts: (
    data: IFetchSubscriberAccountsFilters
  ) => Promise<IFetchSubscriberAccountsRes | undefined>;
  addSubscriberAccount: (
    data: NewSubscriberAccount
  ) => Promise<ISubscriberAccount | undefined>;
}

export type GetSubscriberAccountsStateFunc =
  GetStateFunc<ISubscriberAccountsState>;

export type SetSubscriberAccountsStateFunc =
  SetStateFunc<ISubscriberAccountsState>;

export interface IAddSubscriberAccountProps {
  set: SetSubscriberAccountsStateFunc;
  get: GetSubscriberAccountsStateFunc;
  data: NewSubscriberAccount;
}
