import {
  IGeneralSettings,
  IUpdateGeneralSettingsData,
} from './generalSettings.types';

export interface ISettings {
  id: number | null;
  currentAccount: string | null;
  mfi: number | null;
  helpPhone: string | null;
  adsInPayments: string | null;
}

export interface IGeneralSettingsInitialState {
  settings: ISettings;
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface IGeneralSettingsState extends IGeneralSettingsInitialState {
  fetchGeneralSettings: () => Promise<IGeneralSettings | undefined>;
  updateGeneralSettings: (
    data: IUpdateGeneralSettingsData
  ) => Promise<IGeneralSettings | undefined>;
}
