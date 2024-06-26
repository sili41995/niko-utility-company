import subscriberAccountsService from '@/services/subscriberAccounts.service';
import operationWrapper from '@/store/subscriberAccounts/operationWrapper';
import { ISubscriberAccount } from '@/types/data.types';
import {
  IAddSubscriberAccountProps,
  IFetchSubscriberAccountsOperationProps,
  IFetchSubscriberAccountsRes,
  IUpdateSubscriberAccountByIdProps,
} from '@/types/subscriberAccountsStore.types';
import getUpdatedSubscriberAccounts from '@/utils/getUpdatedSubscriberAccounts';

const fetchSubscriberAccountsOperation = async ({
  set,
  data,
}: IFetchSubscriberAccountsOperationProps): Promise<
  IFetchSubscriberAccountsRes | undefined
> => {
  if (!data.page) {
    set({ isLoaded: false });
  }

  const response = await subscriberAccountsService.fetchSubscriberAccounts(
    data
  );
  set({
    items: response.data,
    count: response.count,
    filteredCount: response.filteredCount,
    isLoaded: true,
  });
  return response;
};

const addSubscriberAccountOperation = async ({
  data,
}: IAddSubscriberAccountProps): Promise<ISubscriberAccount | undefined> => {
  const response = await subscriberAccountsService.addSubscriberAccount(data);
  return response;
};

const updateSubscriberAccountByIdOperation = async ({
  data,
  get,
  set,
}: IUpdateSubscriberAccountByIdProps): Promise<
  ISubscriberAccount | undefined
> => {
  const { items: subscriberAccounts } = get();

  const response = await subscriberAccountsService.updateSubscriberAccountById(
    data
  );
  const updatedSubscriberAccounts = getUpdatedSubscriberAccounts({
    subscriberAccounts,
    updatedSubscriberAccount: response,
  });

  set({ items: updatedSubscriberAccounts });

  return response;
};

export const fetchSubscriberAccounts = operationWrapper(
  fetchSubscriberAccountsOperation
);
export const addSubscriberAccount = operationWrapper(
  addSubscriberAccountOperation
);
export const updateSubscriberAccountById = operationWrapper(
  updateSubscriberAccountByIdOperation
);
