import {
  IFetchSubscriberAccountsFilters,
  IFetchSubscriberAccountsRes,
} from '@/types/subscriberAccountsStore.types';
import HttpService from './http.service';
import { ISubscriberAccount, NewSubscriberAccount } from '@/types/data.types';

class SubscriberAccountsService extends HttpService {
  constructor() {
    super();
  }

  async fetchSubscriberAccounts({
    limit,
    page,
  }: IFetchSubscriberAccountsFilters): Promise<IFetchSubscriberAccountsRes> {
    const response = await this.get<IFetchSubscriberAccountsRes>({
      url: `subscriber-accounts?page=${page}&limit=${limit}`,
    });

    return response.data;
  }

  async addSubscriberAccount(
    data: NewSubscriberAccount
  ): Promise<ISubscriberAccount> {
    const response = await this.post<ISubscriberAccount, NewSubscriberAccount>({
      url: 'subscriber-accounts',
      data,
    });

    return response.data;
  }
}

const subscriberAccountsService = new SubscriberAccountsService();

export default subscriberAccountsService;
