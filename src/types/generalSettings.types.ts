export interface IGeneralSettings {
  id: number;
  currentAccount: string;
  mfi: number;
  helpPhone: string;
  adsInPayments: string | null;
}

export interface IUpdateGeneralSettingsData {
  id: number;
  data: Partial<IGeneralSettings>;
}

export interface IGeneralSettingsData extends Omit<IGeneralSettings, 'id'> {}

export interface IGetGeneralSettingsFormDefaultValues
  extends Omit<IGeneralSettingsData, 'mfi'> {
  mfi: string;
}

export interface IGeneralSettingsFormData
  extends Omit<IGeneralSettings, 'id' | 'mfi'> {
  mfi: string;
  adsInPayments: string;
}
