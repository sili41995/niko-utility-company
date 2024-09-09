import { GetStateFunc, SetStateFunc } from './store.types';
import { NewUser, UserData, Users } from './user.types';

export interface IUsersInitialState {
  items: Users;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IUsersState extends IUsersInitialState {
  getAll: () => Promise<Users | undefined>;
  add: (data: NewUser) => Promise<UserData | undefined>;
}

export type GetUsersStateFunc = GetStateFunc<IUsersState>;

export type SetUsersStateFunc = SetStateFunc<IUsersState>;

export interface IAddProps {
  set: SetUsersStateFunc;
  get: GetUsersStateFunc;
  data: NewUser;
}

export interface IGetAllProps {
  set: SetUsersStateFunc;
}
