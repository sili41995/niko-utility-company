import HttpService from './http.service';
import { IPeriod, Periods } from '@/types/data.types';

class AccountingService extends HttpService {
  constructor() {
    super();
  }

  async fetchPeriods(): Promise<Periods> {
    const response = await this.get<Periods>({
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
