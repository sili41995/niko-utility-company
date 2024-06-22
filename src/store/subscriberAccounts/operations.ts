import subscriberAccountsService from '@/services/subscriberAccounts.service';
import operationWrapper from '@/store/subscriberAccounts/operationWrapper';
import { ISubscriberAccount } from '@/types/data.types';
import {
  IAddSubscriberAccountProps,
  IFetchSubscriberAccountsOperationProps,
  IFetchSubscriberAccountsRes,
} from '@/types/subscriberAccountsStore.types';

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

export const fetchSubscriberAccounts = operationWrapper(
  fetchSubscriberAccountsOperation
);

export const addSubscriberAccount = operationWrapper(
  addSubscriberAccountOperation
);
