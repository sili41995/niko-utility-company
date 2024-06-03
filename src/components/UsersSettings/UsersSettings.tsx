import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { Container, Title } from './UsersSettings.styled';
import { BtnClickEvent } from '@/types/types';
import UsersList from '../UsersList';

const UsersSettings: FC = () => {
  const onAddBntClick = (e: BtnClickEvent): void => {
    console.log(e);
    // console.log(e);
  };

  return (
    <Container>
      <SettingsSectionTitle title='Користувачі' />
      <AddBtn title='Новий користувач' onClick={onAddBntClick} />
      <Title>Користувачі:</Title>
      <UsersList />
    </Container>
  );
};

export default UsersSettings;
