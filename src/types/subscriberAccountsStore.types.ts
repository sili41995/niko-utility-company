import {
  ISubscriberAccount,
  INewSubscriberAccount,
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

export interface ISubscriberAccountsState
  extends ISubscriberAccountsInitialState {
  fetchSubscriberAccounts: () => Promise<
    IFetchSubscriberAccountsRes | undefined
  >;
  addSubscriberAccount: (
    data: INewSubscriberAccount
  ) => Promise<ISubscriberAccount | undefined>;
}

export type GetSubscriberAccountsStateFunc =
  GetStateFunc<ISubscriberAccountsState>;

export type SetSubscriberAccountsStateFunc =
  SetStateFunc<ISubscriberAccountsState>;

export interface IFetchSubscriberAccountsOperationProps {
  set: SetSubscriberAccountsStateFunc;
}

export interface IAddSubscriberAccountProps {
  set: SetSubscriberAccountsStateFunc;
  get: GetSubscriberAccountsStateFunc;
  data: INewSubscriberAccount;
}
