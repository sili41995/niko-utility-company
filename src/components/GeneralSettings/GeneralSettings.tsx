import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import GeneralSettingsForm from '../GeneralSettingsForm';

import Loader from '../Loader';
import { Container, ContentWrap } from './GeneralSettings.styled';
import ErrorMessage from '../ErrorMessage';
import { useGeneralSettings } from '@/hooks';

const GeneralSettings: FC = () => {
  const { isLoadingData, id, error } = useGeneralSettings();

  return (
    <Container>
      <SettingsSectionTitle title='Загальні налаштування:' />
      <ContentWrap>
        {isLoadingData ? <Loader /> : id && <GeneralSettingsForm id={id} />}
      </ContentWrap>
      {error && <ErrorMessage error={error} />}
    </Container>
  );
};

export default GeneralSettings;
