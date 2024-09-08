import { GetStateFunc, SetStateFunc } from './store.types';
import {
  ISubscriberAccount,
  IUpdateSubscriberAccountData,
  INewSubscriberAccountData,
  FullSubscriberAccounts,
  IFullSubscriberAccount,
} from './subscriberAccount.types';

export interface ISubscriberAccountsInitialState {
  items: FullSubscriberAccounts;
  count: null | number;
  filteredCount: null | number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
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
}

export interface IFetchSubscriberAccountsFilters {
  page?: number;
  limit: number;
  category: string;
  surname: string;
  street: string;
  name: string;
  house: string;
  number: string;
  apartment: string;
}

export interface IFetchSubscriberAccountsRes {
  data: FullSubscriberAccounts;
  count: number;
  filteredCount: number;
}

export type GetSubscriberAccountsStateFunc =
  GetStateFunc<ISubscriberAccountsState>;

export type SetSubscriberAccountsStateFunc =
  SetStateFunc<ISubscriberAccountsState>;

export interface IUpdateSubscriberAccountByIdData {
  data: IUpdateSubscriberAccountData;
  id: number;
}

export interface IFetchSubscriberAccountsProps {
  set: SetSubscriberAccountsStateFunc;
  data: IFetchSubscriberAccountsFilters;
}

export interface IUpdateSubscriberAccountByIdProps {
  set: SetSubscriberAccountsStateFunc;
  get: GetSubscriberAccountsStateFunc;
  data: IUpdateSubscriberAccountByIdData;
}

export interface IAddSubscriberAccountProps {
  set: SetSubscriberAccountsStateFunc;
  get: GetSubscriberAccountsStateFunc;
  data: INewSubscriberAccountData;
}

export interface IGetUpdatedSubscriberAccountsProps {
  subscriberAccounts: FullSubscriberAccounts;
  updatedSubscriberAccount: IFullSubscriberAccount;
}
