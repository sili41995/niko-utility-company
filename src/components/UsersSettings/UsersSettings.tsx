import { FC, useEffect, useState } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { Container, Title } from './UsersSettings.styled';
import { BtnClickEvent } from '@/types/types';
import UsersList from '../UsersList';
import AddUserForm from '../AddUserForm';
import AddDataModalForm from '../AddDataModalForm';
import { useUsersStore } from '@/store/store';
import {
  selectError,
  selectFetchUsers,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/users/selectors';
import Loader from '../Loader';
import { makeBlur } from '@/utils';
import ErrorMessage from '../ErrorMessage';

const UsersSettings: FC = () => {
  const [showAddUserForm, setShowAddUserForm] = useState<boolean>(false);
  const fetchUsers = useUsersStore(selectFetchUsers);
  const isLoading = useUsersStore(selectIsLoading);
  const isLoaded = useUsersStore(selectIsLoaded);
  const isLoadingData = !isLoaded && isLoading;
  const error = useUsersStore(selectError);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const toggleShowAddUserForm = (): void => {
    setShowAddUserForm((prevState) => !prevState);
  };

  const onAddBntClick = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);
    toggleShowAddUserForm();
  };

  return isLoadingData ? (
    <Loader />
  ) : (
    <>
      <Container>
        <SettingsSectionTitle title='Користувачі' />
        {isLoaded && (
          <>
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
          </>
        )}
        {error && <ErrorMessage error={error} />}
      </Container>
    </>
  );
};

export default UsersSettings;
