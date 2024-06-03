import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { Container, Title } from './UsersSettings.styled';
import { BtnClickEvent } from '@/types/types';
import { users } from '@/data/users';

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
      <ul>
        {users.map(({ id, name, username }) => (
          <li key={id}>
            <p>
              <span>{name}</span> : <span>{username}</span>
            </p>
            <ul></ul>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UsersSettings;
