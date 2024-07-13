import { IPricesInfo } from '@/types/accountingStore.types';
import HttpService from './http.service';
import {
  AccrualAdjustmentData,
  IAccrualAdjustment,
  IPeriod,
  Periods,
} from '@/types/data.types';

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

  async fetchPrices(): Promise<IPricesInfo> {
    const response = await this.get<IPricesInfo>({
      url: 'accounting/prices',
    });

    return response.data;
  }

  async calculatePrices(): Promise<IPricesInfo> {
    const response = await this.patch<IPricesInfo, undefined>({
      url: 'accounting/prices',
    });

    return response.data;
  }

  async addAccrualAdjustment(
    data: AccrualAdjustmentData
  ): Promise<IAccrualAdjustment> {
    const response = await this.post<IAccrualAdjustment, AccrualAdjustmentData>(
      {
        url: 'accounting/prices',
        data,
      }
    );

    return response.data;
  }
}

const accountingService = new AccountingService();

export default accountingService;
