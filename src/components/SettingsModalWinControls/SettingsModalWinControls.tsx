import { FC } from 'react';
import SettingsModalWinBtn from '../SettingsModalWinBtn';
import { InputTypes, SettingsCategories } from '@/constants';
import { IProps } from './SettingsModalWinControls.types';
import { Container, Form } from './SettingsModalWinControls.styled';

const SettingsModalWinControls: FC<IProps> = ({
  isSettlementsCategory,
  isServiceListCategory,
  isCurrentServicesCategory,
  isUsersCategory,
  isGeneralSettingsCategory,
  onChange,
}) => (
  <Container>
    <Form>
      <SettingsModalWinBtn
        checked={isSettlementsCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.settlements}
        title='Населені пункти'
      />
      <SettingsModalWinBtn
        checked={isServiceListCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.serviceList}
        title='Перелік послуг'
      />
      <SettingsModalWinBtn
        checked={isCurrentServicesCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.currentServices}
        title='Поточні послуги'
      />
      <SettingsModalWinBtn
        checked={isUsersCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.users}
        title='Користувачі'
      />
      <SettingsModalWinBtn
        checked={isGeneralSettingsCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.generalSettings}
        title='Загальні налаштування'
      />
    </Form>
  </Container>
);

export default SettingsModalWinControls;
