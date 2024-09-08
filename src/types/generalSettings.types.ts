export interface IGeneralSettings {
  id: number;
  currentAccount: string;
  mfi: number;
  helpPhone: string;
  adsInPayments: string | null;
}

export type CurrentAccount = Pick<IGeneralSettings, 'currentAccount'>;

export type MFI = Pick<IGeneralSettings, 'mfi'>;

export type HelpPhone = Pick<IGeneralSettings, 'helpPhone'>;

export type AdsInPayments = Pick<IGeneralSettings, 'adsInPayments'>;

export interface IUpdateGeneralSettingsData {
  id: number;
  data: Partial<IGeneralSettings>;
}
