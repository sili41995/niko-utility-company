import { FC, useState } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { Container, Title } from './UsersSettings.styled';
import { BtnClickEvent } from '@/types/types';
import UsersList from '../UsersList';
import AddUserForm from '../AddUserForm';
import AddDataModalForm from '../AddDataModalForm';

const UsersSettings: FC = () => {
  const [showAddUserForm, setShowAddUserForm] = useState<boolean>(false);

  const toggleShowAddUserForm = (): void => {
    setShowAddUserForm((prevState) => !prevState);
  };

  const onAddBntClick = (e: BtnClickEvent): void => {
    console.log(e);
    toggleShowAddUserForm();
  };

  return (
    <Container>
      <SettingsSectionTitle title='Користувачі' />
      <AddBtn
        title='Новий користувач'
        onClick={onAddBntClick}
        disabled={showAddUserForm}
      />
      {showAddUserForm && (
        <AddDataModalForm
          title='Додати нового користувача'
          onCloseBtnClick={toggleShowAddUserForm}
        >
          <AddUserForm />
        </AddDataModalForm>
      )}
      <Title>Користувачі:</Title>
      <UsersList />
    </Container>
  );
};

export default UsersSettings;
