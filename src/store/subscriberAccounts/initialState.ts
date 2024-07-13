import { ISubscriberAccountsInitialState } from '@/types/subscriberAccountsStore.types';

const initialState: ISubscriberAccountsInitialState = {
  items: [],
  count: null,
  filteredCount: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
