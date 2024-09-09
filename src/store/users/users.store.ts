import setState from '@/store/setState';
import {
  GetUsersStateFunc,
  IUsersState,
  SetUsersStateFunc,
} from '@/types/usersStore.types';
import initialState from './initialState';
import { add, getAll } from './operations';
import { NewUser, UserData, Users } from '@/types/user.types';

const usersSlice = (
  set: SetUsersStateFunc,
  get: GetUsersStateFunc
): IUsersState => ({
  ...initialState,
  getAll: async (): Promise<Users | undefined> =>
    await getAll({
      set: setState({ set, name: 'getAll' }),
      data: undefined,
      get,
    }),
  add: async (data: NewUser): Promise<UserData | undefined> =>
    await add({ data, set: setState({ set, name: 'add' }), get }),
});

const params = {
  name: 'usersStore',
};

const usersStore = {
  store: usersSlice,
  params,
};

export default usersStore;
