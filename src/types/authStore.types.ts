import { StorageValue } from 'zustand/middleware';
import { Credentials, IUser, UserData } from './data.types';

export interface IUserState {
  id: null | number;
  name: null | string;
  login: null | string;
  email: null | string;
  fullAccess: null | boolean;
  houses: null | boolean;
  subscribers: null | boolean;
  accounting: null | boolean;
  documents: null | boolean;
  counters: null | boolean;
  oneOffJobs: null | boolean;
  settings: null | boolean;
}

export type SignInRes = Pick<IUser, 'token'>;

export interface IAuthInitialState {
  user: IUserState;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: null | string;
}

export interface IAuthState extends IAuthInitialState {
  signIn: (data: Credentials) => Promise<SignInRes | undefined>;
  refreshUser: () => Promise<UserData | undefined>;
}

export interface IAuthStateLS {
  state: IAuthState;
}

export type GetLSGetItem =
  | StorageValue<IAuthState>
  | Promise<StorageValue<IAuthState>>;

export type SetState<T> = (data: Partial<T>) => void;

export type SetStateFunc<T> = (
  partial: Partial<T>,
  replaceState?: boolean,
  actionName?: string
) => void;

export interface ISetStateProps<T> {
  set: SetStateFunc<T>;
  name: string;
}

export type SetAuthStateFunc = SetStateFunc<IAuthState>;
