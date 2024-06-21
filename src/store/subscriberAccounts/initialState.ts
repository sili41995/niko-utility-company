import { ISubscriberAccountsInitialState } from '@/types/subscriberAccountsStore.types';

const initialState: ISubscriberAccountsInitialState = {
  items: [],
  count: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
