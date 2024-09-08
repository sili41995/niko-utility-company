import HttpService from './http.service';
import { IPeriod, Periods } from '@/types/data.types';

class PeriodsService extends HttpService {
  constructor() {
    super();
  }

  async fetchPeriods(): Promise<Periods> {
    const response = await this.get<Periods>({
      url: 'periods',
    });

    return response.data;
  }

  async addPeriod(): Promise<IPeriod> {
    const response = await this.post<IPeriod, undefined>({
      url: 'periods',
    });

    return response.data;
  }
}

const periodsService = new PeriodsService();

export default periodsService;
