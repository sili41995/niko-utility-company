import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetSubscriberAccountsStateFunc,
  ISubscriberAccountsState,
  SetSubscriberAccountsStateFunc,
  IFetchSubscriberAccountsRes,
} from '@/types/subscriberAccountsStore.types';
import { fetchSubscriberAccounts, addSubscriberAccount } from './operations';
import { ISubscriberAccount, INewSubscriberAccount } from '@/types/data.types';

const subscriberAccountsSlice = (
  set: SetSubscriberAccountsStateFunc,
  get: GetSubscriberAccountsStateFunc
): ISubscriberAccountsState => ({
  ...initialState,
  fetchSubscriberAccounts: async (): Promise<
    IFetchSubscriberAccountsRes | undefined
  > =>
    await fetchSubscriberAccounts({
      set: setState({ set, name: 'fetchSubscriberAccounts' }),
      data: undefined,
      get,
    }),
  addSubscriberAccount: async (
    data: INewSubscriberAccount
  ): Promise<ISubscriberAccount | undefined> =>
    await addSubscriberAccount({
      data,
      set: setState({ set, name: 'addSubscriberAccount' }),
      get,
    }),
});

const params = {
  name: 'subscriberAccountsStore',
};

const subscriberAccountsStore = {
  store: subscriberAccountsSlice,
  params,
};

export default subscriberAccountsStore;
