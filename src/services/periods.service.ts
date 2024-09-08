import HttpService from './http.service';
import { FullPeriods, IFullPeriod } from '@/types/period.types';

class PeriodsService extends HttpService {
  constructor() {
    super();
  }

  async fetchPeriods(): Promise<FullPeriods> {
    const response = await this.get<FullPeriods>({
      url: 'periods',
    });

    return response.data;
  }

  async addPeriod(): Promise<IFullPeriod> {
    const response = await this.post<IFullPeriod, undefined>({
      url: 'periods',
    });

    return response.data;
  }
}

const periodsService = new PeriodsService();

export default periodsService;
