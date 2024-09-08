import { StorageValue } from 'zustand/middleware';
import { Credentials } from './auth.types';
import { GetStateFunc, SetStateFunc } from './store.types';
import { IUser, UserData } from './user.types';

export interface IUserState {
  id: null | number;
  name: null | string;
  login: null | string;
  email: null | string;
}

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
  fetchProfile: () => Promise<UserData | undefined>;
}

export type SignInRes = Pick<IUser, 'token'>;

export type SetAuthStateFunc = SetStateFunc<IAuthState>;

export type GetAuthStateFunc = GetStateFunc<IAuthState>;

export interface ISignInOperationProps {
  set: SetAuthStateFunc;
  data: Credentials;
}

export interface IAuthOperationProps {
  set: SetAuthStateFunc;
}

export interface IAuthStateLS {
  state: IAuthState;
}

export type GetLSGetItem =
  | StorageValue<IAuthState>
  | Promise<StorageValue<IAuthState>>;
