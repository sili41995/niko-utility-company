import { NewUser, UserData, Users } from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IUsersInitialState {
  items: Users;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export type GetUsersStateFunc = GetStateFunc<IUsersState>;

export type SetUsersStateFunc = SetStateFunc<IUsersState>;

export interface IFetchUsersOperationProps {
  set: SetUsersStateFunc;
}

export interface IAddUserProps {
  set: SetUsersStateFunc;
  get: GetUsersStateFunc;
  data: NewUser;
}

export interface IAccessData {
  [key: string]: boolean;
}

export interface IChangeAccessStatusData {
  id: number;
  data: IAccessData;
  accessKey: string;
}

export interface IChangeAccessStatusProps {
  set: SetUsersStateFunc;
  get: GetUsersStateFunc;
  data: IChangeAccessStatusData;
}

export interface IUsersState extends IUsersInitialState {
  fetchUsers: () => Promise<Users | undefined>;
  addUser: (data: NewUser) => Promise<UserData | undefined>;
  changeAccessStatus: (
    data: IChangeAccessStatusData
  ) => Promise<UserData | undefined>;
}
