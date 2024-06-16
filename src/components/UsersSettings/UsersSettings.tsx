import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { Container, Title } from './UsersSettings.styled';
import UsersList from '../UsersList';
import AddUserForm from '../AddUserForm';
import AddDataModalForm from '../AddDataModalForm';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import { useUsersSettings } from '@/hooks';

const UsersSettings: FC = () => {
  const {
    isLoadingData,
    isLoaded,
    onAddBntClick,
    showAddUserForm,
    toggleShowAddUserForm,
    error,
  } = useUsersSettings();

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
