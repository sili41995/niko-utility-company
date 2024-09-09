import { IGeneralSettingsFormData } from './generalSettings.types';

export type Mfi = Pick<IGeneralSettingsFormData, 'mfi'>;

export type CurrentAccount = Pick<IGeneralSettingsFormData, 'currentAccount'>;

export type HelpPhone = Pick<IGeneralSettingsFormData, 'helpPhone'>;

export type AdsInPayments = Pick<IGeneralSettingsFormData, 'adsInPayments'>;
