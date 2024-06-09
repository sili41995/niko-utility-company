import { Credentials, UserData } from '@/types/data.types';
import {
  GetLSGetItem,
  IAuthState,
  IAuthStateLS,
  SetAuthStateFunc,
  SignInRes,
} from '@/types/authStore.types';
import setState from '@/store/setState';
import initialState from './initialState';
import { AuthParams } from '@/constants';
import { getTokenFromLS } from '@/utils';
import { refreshUser, signIn } from './operations';

const authSlice = (set: SetAuthStateFunc): IAuthState => ({
  ...initialState,
  [AuthParams.tokenLSKey]: getTokenFromLS(),
  signIn: async (data: Credentials): Promise<SignInRes | undefined> =>
    await signIn({
      set: setState({ set, name: 'signIn' }),
      data,
    }),
  refreshUser: async (): Promise<UserData | undefined> =>
    await refreshUser({
      set: setState({ set, name: 'refreshUser' }),
    }),
});

const storageParams = {
  name: 'token',
  storage: {
    getItem: (name: string): GetLSGetItem => {
      const value = localStorage.getItem(name);
      return value ? JSON.parse(value) : null;
    },
    setItem: (name: string, { state }: IAuthStateLS): void => {
      localStorage.setItem(name, JSON.stringify(state.token));
    },
    removeItem: (name: string): void => {
      localStorage.removeItem(name);
    },
  },
};

const devToolsParams = { name: 'authStore' };

const authStore = {
  store: authSlice,
  storageParams,
  devToolsParams,
};

export default authStore;
