import { IGeneralSettingsState } from '@/types/generalSettingsStore.types';

export const selectGeneralSettings = (state: IGeneralSettingsState) =>
  state.settings;

export const selectIsLoading = (state: IGeneralSettingsState) =>
  state.isLoading;

export const selectIsLoaded = (state: IGeneralSettingsState) => state.isLoaded;

export const selectError = (state: IGeneralSettingsState) => state.error;

export const selectFetchGeneralSettings = (state: IGeneralSettingsState) =>
  state.fetchGeneralSettings;

export const selectUpdateGeneralSettings = (state: IGeneralSettingsState) =>
  state.updateGeneralSettings;
