import { ILastCalculate } from '@/types/pricesStore.types';
import HttpService from './http.service';

class PricesService extends HttpService {
  constructor() {
    super();
  }

  async getLastCalculate(): Promise<ILastCalculate | null> {
    const response = await this.get<ILastCalculate | null>({
      url: 'prices',
    });

    return response.data;
  }

  async calculate(): Promise<ILastCalculate> {
    const response = await this.post<ILastCalculate, undefined>({
      url: 'prices',
    });

    return response.data;
  }
}

const pricesService = new PricesService();

export default pricesService;
