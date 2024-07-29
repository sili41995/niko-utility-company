import {
  IFetchSubscriberAccountsFilters,
  IFetchSubscriberAccountsRes,
  IUpdateSubscriberAccountByIdData,
} from '@/types/subscriberAccountsStore.types';
import HttpService from './http.service';
import {
  ISubscriberAccount,
  INewSubscriberAccountData,
  IEditSubscriberAccountData,
} from '@/types/subscriberAccount.types';

class SubscriberAccountsService extends HttpService {
  constructor() {
    super();
  }

  async fetchSubscriberAccounts({
    limit,
    page = 1,
    surname,
    name,
    number,
    type,
    street,
    house,
    apartment,
  }: IFetchSubscriberAccountsFilters): Promise<IFetchSubscriberAccountsRes> {
    const response = await this.get<IFetchSubscriberAccountsRes>({
      url: `subscriber-accounts?page=${page}&limit=${limit}&surname=${surname}&name=${name}&number=${number}&type=${type}&street=${street}&house=${house}&apartment=${apartment}`,
    });

    return response.data;
  }

  async fetchSubscriberAccountByNumber(
    number: string
  ): Promise<ISubscriberAccount> {
    const response = await this.get<ISubscriberAccount>({
      url: `subscriber-accounts/${number}`,
    });

    return response.data;
  }

  async addSubscriberAccount(
    data: INewSubscriberAccountData
  ): Promise<ISubscriberAccount> {
    const response = await this.post<
      ISubscriberAccount,
      INewSubscriberAccountData
    >({
      url: 'subscriber-accounts',
      data,
    });

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
}

const subscriberAccountsService = new SubscriberAccountsService();

export default subscriberAccountsService;
