import {
  IFetchSubscriberAccountsFilters,
  IFetchSubscriberAccountsRes,
  IPricesInfo,
  IUpdateSubscriberAccountByIdData,
} from '@/types/subscriberAccountsStore.types';
import HttpService from './http.service';
import {
  ISubscriberAccount,
  INewSubscriberAccount,
  IEditSubscriberAccountData,
} from '@/types/data.types';

class SubscriberAccountsService extends HttpService {
  constructor() {
    super();
  }

  async fetchSubscriberAccounts({
    limit,
    page = 1,
    surname,
    name,
    account,
    type,
    street,
    house,
    apartment,
  }: IFetchSubscriberAccountsFilters): Promise<IFetchSubscriberAccountsRes> {
    const response = await this.get<IFetchSubscriberAccountsRes>({
      url: `subscriber-accounts?page=${page}&limit=${limit}&surname=${surname}&name=${name}&account=${account}&type=${type}&street=${street}&house=${house}&apartment=${apartment}`,
    });

    return response.data;
  }

  async addSubscriberAccount(
    data: INewSubscriberAccount
  ): Promise<ISubscriberAccount> {
    const response = await this.post<ISubscriberAccount, INewSubscriberAccount>(
      {
        url: 'subscriber-accounts',
        data,
      }
    );

    return response.data;
  }

  async updateSubscriberAccountById({
    id,
    data,
  }: IUpdateSubscriberAccountByIdData): Promise<ISubscriberAccount> {
    const response = await this.put<
      ISubscriberAccount,
      IEditSubscriberAccountData
    >({
      url: `subscriber-accounts/${id}`,
      data,
    });

    return response.data;
  }

  async fetchPrices(): Promise<IPricesInfo> {
    const response = await this.get<IPricesInfo>({
      url: 'subscriber-accounts/prices',
    });

    return response.data;
  }

  async calculatePrices(): Promise<IPricesInfo> {
    const response = await this.patch<IPricesInfo, undefined>({
      url: 'subscriber-accounts/prices',
    });

    return response.data;
  }
}

const subscriberAccountsService = new SubscriberAccountsService();

export default subscriberAccountsService;
