import { NewUser, UserData, Users } from '@/types/data.types';
import setState from '@/store/setState';
import {
  GetUsersStateFunc,
  IChangeAccessStatusData,
  IUsersState,
  SetUsersStateFunc,
} from '@/types/usersStore.types';
import initialState from './initialState';
import { addUser, changeAccessStatus, fetchUsers } from './operations';

const usersSlice = (
  set: SetUsersStateFunc,
  get: GetUsersStateFunc
): IUsersState => ({
  ...initialState,
  fetchUsers: async (): Promise<Users | undefined> =>
    await fetchUsers({
      set: setState({ set, name: 'fetchUsers' }),
      data: undefined,
      get,
    }),
  addUser: async (data: NewUser): Promise<UserData | undefined> =>
    await addUser({ data, set: setState({ set, name: 'addUser' }), get }),
  changeAccessStatus: async (
    data: IChangeAccessStatusData
  ): Promise<UserData | undefined> =>
    await changeAccessStatus({
      data,
      set: setState({ set, name: 'changeAccessStatus' }),
      get,
    }),
});

const params = {
  name: 'usersStore',
};

const usersStore = {
  store: usersSlice,
  params,
};

export default usersStore;
