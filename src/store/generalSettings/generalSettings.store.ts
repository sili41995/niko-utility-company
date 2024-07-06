import {
  GetGeneralSettingsStateFunc,
  IGeneralSettingsState,
  IUpdateGeneralSettingsData,
  SetGeneralSettingsStateFunc,
} from '@/types/generalSettingsStore.types';
import initialState from './initialState';
import { IGeneralSettings } from '@/types/data.types';
import setState from '@/store/setState';
import { fetchGeneralSettings, updateGeneralSettings } from './operations';

const generalSettingsSlice = (
  set: SetGeneralSettingsStateFunc,
  get: GetGeneralSettingsStateFunc
): IGeneralSettingsState => ({
  ...initialState,
  fetchGeneralSettings: async (): Promise<IGeneralSettings | undefined> =>
    await fetchGeneralSettings({
      set: setState({ set, name: 'fetchGeneralSettings' }),
      data: undefined,
      get,
    }),
  updateGeneralSettings: async (
    data: IUpdateGeneralSettingsData
  ): Promise<IGeneralSettings | undefined> =>
    await updateGeneralSettings({
      data,
      set: setState({ set, name: 'updateGeneralSettings' }),
      get,
    }),
});

const params = {
  name: 'generalSettingsStore',
};

const generalSettingsStore = {
  store: generalSettingsSlice,
  params,
};

export default generalSettingsStore;
