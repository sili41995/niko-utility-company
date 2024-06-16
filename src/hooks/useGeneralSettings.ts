import {
  selectError,
  selectFetchGeneralSettings,
  selectGeneralSettings,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/generalSettings/selectors';
import { useGeneralSettingsStore } from '@/store/store';
import { IUseGeneralSettings } from '@/types/hooks.types';
import { useEffect } from 'react';

const useGeneralSettings = (): IUseGeneralSettings => {
  const { id } = useGeneralSettingsStore(selectGeneralSettings);
  const fetchGeneralSettings = useGeneralSettingsStore(
    selectFetchGeneralSettings
  );
  const isLoaded = useGeneralSettingsStore(selectIsLoaded);
  const isLoading = useGeneralSettingsStore(selectIsLoading);
  const isLoadingData = !isLoaded && isLoading;
  const error = useGeneralSettingsStore(selectError);

  useEffect(() => {
    fetchGeneralSettings();
  }, [fetchGeneralSettings]);

  return { isLoadingData, id, error };
};

export default useGeneralSettings;
