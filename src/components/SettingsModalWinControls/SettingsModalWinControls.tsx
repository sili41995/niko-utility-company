import { FC } from 'react';
import SettingsModalWinBtn from '../SettingsModalWinBtn';
import { InputTypes, SettingsCategories } from '@/constants';
import { IProps } from './SettingsModalWinControls.types';
import { Container, Form, Title } from './SettingsModalWinControls.styled';

const SettingsModalWinControls: FC<IProps> = ({
  isSettlementsCategory,
  isUsersCategory,
  isGeneralSettingsCategory,
  onChange,
}) => (
  <Container>
    <Title>Налаштування</Title>
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
