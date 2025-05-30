import { ISubscriberAccountsState } from '@/types/subscriberAccountsStore.types';

export const selectIsLoading = (state: ISubscriberAccountsState) =>
  state.isLoading;

export const selectSubscriberAccounts = (state: ISubscriberAccountsState) =>
  state.items;

export const selectTotalCount = (state: ISubscriberAccountsState) =>
  state.count;

export const selectFilteredCount = (state: ISubscriberAccountsState) =>
  state.filteredCount;

export const selectIsLoaded = (state: ISubscriberAccountsState) =>
  state.isLoaded;

export const selectError = (state: ISubscriberAccountsState) => state.error;

export const selectFetchSubscriberAccounts = (
  state: ISubscriberAccountsState
) => state.fetchSubscriberAccounts;

export const selectAddSubscriberAccount = (state: ISubscriberAccountsState) =>
  state.addSubscriberAccount;

export const selectUpdateSubscriberAccountById = (
  state: ISubscriberAccountsState
) => state.updateSubscriberAccountById;
