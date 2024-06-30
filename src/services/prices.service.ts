import HttpService from './http.service';
import { IPricesInfo } from '@/types/pricesStore.types';

class PricesService extends HttpService {
  constructor() {
    super();
  }

  async fetchPrices(): Promise<IPricesInfo> {
    const response = await this.get<IPricesInfo>({
      url: 'accounting/prices',
    });

    return response.data;
  }

  async calculatePrices(): Promise<IPricesInfo> {
    const response = await this.put<IPricesInfo, undefined>({
      url: 'accounting/prices',
    });

    return response.data;
  }
}

const pricesService = new PricesService();

export default pricesService;
