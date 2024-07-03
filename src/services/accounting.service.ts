import HttpService from './http.service';
import { IPeriod } from '@/types/data.types';

class AccountingService extends HttpService {
  constructor() {
    super();
  }

  async fetchCurrentPeriod(): Promise<IPeriod> {
    const response = await this.get<IPeriod>({
      url: 'accounting/periods',
    });

    return response.data;
  }

  async addPeriod(): Promise<IPeriod> {
    const response = await this.post<IPeriod, undefined>({
      url: 'accounting/periods',
    });

    return response.data;
  }
}

const accountingService = new AccountingService();

export default accountingService;
