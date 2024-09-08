import { Streets } from '@/types/street.types';
import HttpService from './http.service';

class StreetsService extends HttpService {
  constructor() {
    super();
  }

  async fetchStreets(): Promise<Streets> {
    const response = await this.get<Streets>({
      url: 'streets',
    });

    return response.data;
  }
}

const streetsService = new StreetsService();

export default streetsService;
