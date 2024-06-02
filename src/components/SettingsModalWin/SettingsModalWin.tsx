import { FC, useState } from 'react';
import ModalWin from '../ModalWin';
import { IProps } from './SettingsModalWin.types';
import SettingsModalWinControls from '../SettingsModalWinControls';
import { SettingsCategories } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import { Container, SettingsContainer } from './SettingsModalWin.styled';
import SettlementsSettings from '../SettlementsSettings';
import ServiceListSettings from '../ServiceListSettings';
import CurrentServicesSettings from '../CurrentServicesSettings';
import UsersSettings from '../UsersSettings';
import GeneralSettings from '../GeneralSettings';

const SettingsModalWin: FC<IProps> = ({ setModalWinState }) => {
  const [category, setCategory] = useState<string>(
    () => SettingsCategories.settlements
  );
  const isSettlementsCategory = category === SettingsCategories.settlements;
  const isServiceListCategory = category === SettingsCategories.serviceList;
  const isCurrentServicesCategory =
    category === SettingsCategories.currentServices;
  const isUsersCategory = category === SettingsCategories.users;
  const isGeneralSettingsCategory =
    category === SettingsCategories.generalSettings;

  const onInputChange = (e: InputChangeEvent): void => {
    setCategory(e.currentTarget.value);
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <SettingsModalWinControls
          isSettlementsCategory={isSettlementsCategory}
          isServiceListCategory={isServiceListCategory}
          isCurrentServicesCategory={isCurrentServicesCategory}
          isUsersCategory={isUsersCategory}
          isGeneralSettingsCategory={isGeneralSettingsCategory}
          onChange={onInputChange}
        />
        <SettingsContainer>
          {isSettlementsCategory && <SettlementsSettings />}
          {isServiceListCategory && <ServiceListSettings />}
          {isCurrentServicesCategory && <CurrentServicesSettings />}
          {isUsersCategory && <UsersSettings />}
          {isGeneralSettingsCategory && <GeneralSettings />}
        </SettingsContainer>
      </Container>
    </ModalWin>
  );
};

export default SettingsModalWin;
