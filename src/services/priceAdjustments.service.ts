import HttpService from './http.service';
import {
  IPriceAdjustment,
  PriceAdjustmentData,
} from '@/types/priceAdjustment.types';

class PriceAdjustmentsService extends HttpService {
  constructor() {
    super();
  }

  async add(data: PriceAdjustmentData): Promise<IPriceAdjustment> {
    const response = await this.post<IPriceAdjustment, PriceAdjustmentData>({
      url: 'price-adjustments',
      data,
    });

    return response.data;
  }
}

const priceAdjustmentsService = new PriceAdjustmentsService();

export default priceAdjustmentsService;
