import { FC, useEffect } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import GeneralSettingsForm from '../GeneralSettingsForm';
import { useGeneralSettingsStore } from '@/store/store';
import {
  selectError,
  selectFetchGeneralSettings,
  selectGeneralSettings,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/generalSettings/selectors';
import Loader from '../Loader';
import { Container } from './GeneralSettings.styled';
import ErrorMessage from '../ErrorMessage';

const GeneralSettings: FC = () => {
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

  return isLoadingData ? (
    <Loader />
  ) : (
    <Container>
      <SettingsSectionTitle title='Загальні налаштування:' />
      {id && <GeneralSettingsForm id={id} />}
      {error && <ErrorMessage error={error} />}
    </Container>
  );
};

export default GeneralSettings;
