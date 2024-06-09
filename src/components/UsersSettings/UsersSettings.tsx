import { FC, useEffect, useState } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { Container, Title } from './UsersSettings.styled';
import { BtnClickEvent } from '@/types/types';
import UsersList from '../UsersList';
import AddUserForm from '../AddUserForm';
import AddDataModalForm from '../AddDataModalForm';
import { useUsersStore } from '@/store/store';
import { selectFetchUsers, selectIsLoaded } from '@/store/users/selectors';
import Loader from '../Loader';

const UsersSettings: FC = () => {
  const [showAddUserForm, setShowAddUserForm] = useState<boolean>(false);
  const fetchUsers = useUsersStore(selectFetchUsers);
  const isLoaded = useUsersStore(selectIsLoaded);
  const isLoading = !isLoaded;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const toggleShowAddUserForm = (): void => {
    setShowAddUserForm((prevState) => !prevState);
  };

  const onAddBntClick = (e: BtnClickEvent): void => {
    console.log(e);
    toggleShowAddUserForm();
  };

  return isLoading ? (
    <Loader />
  ) : (
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
