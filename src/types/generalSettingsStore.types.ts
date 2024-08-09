import { IGeneralSettings } from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IUpdateGeneralSettingsData {
  id: number;
  data: Partial<IGeneralSettings>;
}

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

export type GetGeneralSettingsStateFunc = GetStateFunc<IGeneralSettingsState>;

export type SetGeneralSettingsStateFunc = SetStateFunc<IGeneralSettingsState>;

export interface IFetchGeneralSettingsOperationProps {
  set: SetGeneralSettingsStateFunc;
}

export interface IUpdateGeneralSettingsOperationProps {
  set: SetGeneralSettingsStateFunc;
  data: IUpdateGeneralSettingsData;
}
