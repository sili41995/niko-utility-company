import subscriberAccountsService from '@/services/subscriberAccounts.service';
import operationWrapper from '@/store/subscriberAccounts/operationWrapper';
import { ISubscriberAccount } from '@/types/data.types';
import {
  IAddSubscriberAccountProps,
  IFetchSubscriberAccountsProps,
  IFetchSubscriberAccountsRes,
  IUpdateSubscriberAccountByIdProps,
  IPricesOPerationsProps,
  IPricesInfo,
} from '@/types/subscriberAccountsStore.types';
import getUpdatedSubscriberAccounts from '@/utils/getUpdatedSubscriberAccounts';

const fetchSubscriberAccountsOperation = async ({
  set,
  data,
}: IFetchSubscriberAccountsProps): Promise<
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

const calculatePricesOperation = async ({
  set,
}: IPricesOPerationsProps): Promise<IPricesInfo | undefined> => {
  const response = await subscriberAccountsService.calculatePrices();

  set({
    lastCalculate: response.lastCalculate,
  });

  return response;
};

const fetchPricesOperation = async ({
  set,
}: IPricesOPerationsProps): Promise<IPricesInfo | undefined> => {
  const response = await subscriberAccountsService.fetchPrices();

  set({
    lastCalculate: response.lastCalculate,
  });

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
export const calculatePrices = operationWrapper(calculatePricesOperation);
export const fetchPrices = operationWrapper(fetchPricesOperation);
