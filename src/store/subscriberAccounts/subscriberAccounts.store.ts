import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetSubscriberAccountsStateFunc,
  ISubscriberAccountsState,
  SetSubscriberAccountsStateFunc,
  IGetAll,
  IGetAllFilters,
  IUpdateByIdData,
} from '@/types/subscriberAccountsStore.types';
import {
  fetchSubscriberAccounts,
  addSubscriberAccount,
  updateSubscriberAccountById,
} from './operations';
import {
  ISubscriberAccount,
  INewSubscriberAccountData,
} from '@/types/subscriberAccount.types';

const subscriberAccountsSlice = (
  set: SetSubscriberAccountsStateFunc,
  get: GetSubscriberAccountsStateFunc
): ISubscriberAccountsState => ({
  ...initialState,
  fetchSubscriberAccounts: async (
    data: IGetAllFilters
  ): Promise<IGetAll | undefined> =>
    await fetchSubscriberAccounts({
      set: setState({ set, name: 'fetchSubscriberAccounts' }),
      data,
      get,
    }),
  add: async (
    data: INewSubscriberAccountData
  ): Promise<ISubscriberAccount | undefined> =>
    await addSubscriberAccount({
      data,
      set: setState({ set, name: 'addSubscriberAccount' }),
      get,
    }),
  updateById: async (
    data: IUpdateByIdData
  ): Promise<ISubscriberAccount | undefined> =>
    await updateSubscriberAccountById({
      data,
      set: setState({ set, name: 'updateById' }),
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
