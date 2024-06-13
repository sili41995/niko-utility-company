import { IGeneralSettings } from '@/types/data.types';
import HttpService from './http.service';
import { IUpdateGeneralSettingsData } from '@/types/generalSettingsStore.types';

class GeneralSettingsService extends HttpService {
  constructor() {
    super();
  }

  async fetchGeneralSettings(): Promise<IGeneralSettings> {
    const response = await this.get<IGeneralSettings>({
      url: 'general-settings',
    });

    return response.data;
  }

  async updateGeneralSettings({
    id,
    data,
  }: IUpdateGeneralSettingsData): Promise<IGeneralSettings> {
    const response = await this.patch<IGeneralSettings, IGeneralSettings>({
      url: `general-settings/${id}`,
      data,
    });

    return response.data;
  }
}

const generalSettingsService = new GeneralSettingsService();

export default generalSettingsService;
