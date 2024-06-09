import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import GeneralSettingsForm from '../GeneralSettingsForm';

const GeneralSettings: FC = () => {
  return (
    <div>
      <SettingsSectionTitle title='Загальні налаштування:' />
      <GeneralSettingsForm />
    </div>
  );
};

export default GeneralSettings;
