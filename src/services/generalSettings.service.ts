import {
  IGeneralSettings,
  IUpdateGeneralSettingsData,
} from '@/types/generalSettings.types';
import HttpService from './http.service';

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
    const response = await this.put<
      IGeneralSettings,
      Partial<IGeneralSettings>
    >({
      url: `general-settings/${id}`,
      data,
    });

    return response.data;
  }
}

const generalSettingsService = new GeneralSettingsService();

export default generalSettingsService;
