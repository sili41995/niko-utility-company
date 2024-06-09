import { IUsersInitialState } from '@/types/usersStore.types';

const initialState: IUsersInitialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
