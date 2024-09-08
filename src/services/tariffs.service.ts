import HttpService from './http.service';
import { ITariff, NewTariff, Tariffs } from '@/types/tariff.types';

class TariffsService extends HttpService {
  constructor() {
    super();
  }

  async fetchTariffs(): Promise<Tariffs> {
    const response = await this.get<Tariffs>({
      url: 'tariffs',
    });

    return response.data;
  }

  async addTariff(data: NewTariff): Promise<ITariff> {
    const response = await this.post<ITariff, NewTariff>({
      url: 'tariffs',
      data,
    });

    return response.data;
  }
}

const tariffsService = new TariffsService();

export default tariffsService;
