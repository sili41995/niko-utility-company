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
}: IFetchSubscriberAccountsOperationProps): Promise<
  IFetchSubscriberAccountsRes | undefined
> => {
  const response = await subscriberAccountsService.fetchSubscriberAccounts();
  set({
    items: response.data,
    count: response.count,
    isLoaded: true,
  });
  return response;
};

const addSubscriberAccountOperation = async ({
  data,
  set,
  get,
}: IAddSubscriberAccountProps): Promise<ISubscriberAccount | undefined> => {
  const { items: subscriberAccounts } = get();

  const response = await subscriberAccountsService.addSubscriberAccount(data);
  set({ items: [...subscriberAccounts, response] });
  return response;
};

export const fetchSubscriberAccounts = operationWrapper(
  fetchSubscriberAccountsOperation
);

export const addSubscriberAccount = operationWrapper(
  addSubscriberAccountOperation
);
