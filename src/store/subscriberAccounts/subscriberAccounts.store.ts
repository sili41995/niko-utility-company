import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetSubscriberAccountsStateFunc,
  ISubscriberAccountsState,
  SetSubscriberAccountsStateFunc,
  IFetchSubscriberAccountsRes,
  IFetchSubscriberAccountsFilters,
  IUpdateSubscriberAccountByIdData,
  IPricesInfo,
} from '@/types/subscriberAccountsStore.types';
import {
  fetchSubscriberAccounts,
  addSubscriberAccount,
  updateSubscriberAccountById,
  calculatePrices,
  fetchPrices,
} from './operations';
import { ISubscriberAccount, INewSubscriberAccount } from '@/types/data.types';

const subscriberAccountsSlice = (
  set: SetSubscriberAccountsStateFunc,
  get: GetSubscriberAccountsStateFunc
): ISubscriberAccountsState => ({
  ...initialState,
  fetchSubscriberAccounts: async (
    data: IFetchSubscriberAccountsFilters
  ): Promise<IFetchSubscriberAccountsRes | undefined> =>
    await fetchSubscriberAccounts({
      set: setState({ set, name: 'fetchSubscriberAccounts' }),
      data,
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
  updateSubscriberAccountById: async (
    data: IUpdateSubscriberAccountByIdData
  ): Promise<ISubscriberAccount | undefined> =>
    await updateSubscriberAccountById({
      data,
      set: setState({ set, name: 'updateSubscriberAccountById' }),
      get,
    }),
  fetchPrices: async (): Promise<IPricesInfo | undefined> =>
    await fetchPrices({
      set: setState({ set, name: 'fetchPrices' }),
      data: undefined,
      get,
    }),
  calculatePrices: async (): Promise<IPricesInfo | undefined> =>
    await calculatePrices({
      set: setState({ set, name: 'calculatePrices' }),
      data: undefined,
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
