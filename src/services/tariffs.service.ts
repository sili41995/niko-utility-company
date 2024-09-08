import HttpService from './http.service';
import { INewTariff, FullTariffs, IFullTariff } from '@/types/tariff.types';

class TariffsService extends HttpService {
  constructor() {
    super();
  }

  async fetchTariffs(): Promise<FullTariffs> {
    const response = await this.get<FullTariffs>({
      url: 'tariffs',
    });

    return response.data;
  }

  async addTariff(data: INewTariff): Promise<IFullTariff> {
    const response = await this.post<IFullTariff, INewTariff>({
      url: 'tariffs',
      data,
    });

    return response.data;
  }
}

const tariffsService = new TariffsService();

export default tariffsService;
