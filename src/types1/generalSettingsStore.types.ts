import { GetStateFunc, SetStateFunc } from '../types/store.types';

export type GetGeneralSettingsStateFunc = GetStateFunc<IGeneralSettingsState>;

export type SetGeneralSettingsStateFunc = SetStateFunc<IGeneralSettingsState>;

export interface IFetchGeneralSettingsOperationProps {
  set: SetGeneralSettingsStateFunc;
}

export interface IUpdateGeneralSettingsOperationProps {
  set: SetGeneralSettingsStateFunc;
  data: IUpdateGeneralSettingsData;
}
