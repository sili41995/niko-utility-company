import { IAuthInitialState } from '@/types/authStore.types';

const initialState: IAuthInitialState = {
  user: {
    id: null,
    login: null,
    name: null,
    email: null,
    accounting: null,
    counters: null,
    documents: null,
    fullAccess: null,
    houses: null,
    oneOffJobs: null,
    settings: null,
    subscribers: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  error: null,
};

export default initialState;
