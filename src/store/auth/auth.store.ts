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
import { fetchProfile, signIn } from './operations';
import { Credentials } from '@/types/auth.types';
import { UserData } from '@/types/user.types';

const authSlice = (set: SetAuthStateFunc): IAuthState => ({
  ...initialState,
  [AuthParams.tokenLSKey]: getTokenFromLS(),
  signIn: async (data: Credentials): Promise<SignInRes | undefined> =>
    await signIn({
      set: setState({ set, name: 'signIn' }),
      data,
    }),
  fetchProfile: async (): Promise<UserData | undefined> =>
    await fetchProfile({
      set: setState({ set, name: 'fetchProfile' }),
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
