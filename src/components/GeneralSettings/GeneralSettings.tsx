import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import GeneralSettingsForm from '../GeneralSettingsForm';

import Loader from '../Loader';
import { Container } from './GeneralSettings.styled';
import ErrorMessage from '../ErrorMessage';
import { useGeneralSettings } from '@/hooks';

const GeneralSettings: FC = () => {
  const { isLoadingData, id, error } = useGeneralSettings();

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
