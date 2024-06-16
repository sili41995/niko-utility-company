import { Houses } from '@/types/data.types';
import HttpService from './http.service';

class HousesService extends HttpService {
  constructor() {
    super();
  }

  async fetchHouses(streetId: number): Promise<Houses> {
    const response = await this.get<Houses>({
      url: `houses/${streetId}`,
    });

    return response.data;
  }
}

const housesService = new HousesService();

export default housesService;
