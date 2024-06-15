import { FC, useEffect } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import GeneralSettingsForm from '../GeneralSettingsForm';
import { useGeneralSettingsStore } from '@/store/store';
import {
  selectFetchGeneralSettings,
  selectGeneralSettings,
  selectIsLoaded,
} from '@/store/generalSettings/selectors';
import Loader from '../Loader';
import { Container } from './GeneralSettings.styled';

const GeneralSettings: FC = () => {
  const { id } = useGeneralSettingsStore(selectGeneralSettings);
  const fetchGeneralSettings = useGeneralSettingsStore(
    selectFetchGeneralSettings
  );
  const isLoaded = useGeneralSettingsStore(selectIsLoaded);
  const isLoadingData = !isLoaded;

  useEffect(() => {
    fetchGeneralSettings();
  }, [fetchGeneralSettings]);

  return isLoadingData ? (
    <Loader />
  ) : (
    <Container>
      <SettingsSectionTitle title='Загальні налаштування:' />
      {id && <GeneralSettingsForm id={id} />}
    </Container>
  );
};

export default GeneralSettings;
