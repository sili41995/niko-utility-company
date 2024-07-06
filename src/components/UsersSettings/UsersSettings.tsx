import { FC } from 'react';
import SettingsSectionTitle from '@/components/SettingsSectionTitle';
import AddBtn from '@/components/AddBtn';
import { Container, ContentWrap } from './UsersSettings.styled';
import UsersList from '@/components/UsersList';
import AddUserForm from '@/components/AddUserForm';
import AddDataModalForm from '@/components/AddDataModalForm';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import { useUsersSettings } from '@/hooks';

const UsersSettings: FC = () => {
  const {
    isLoadingData,
    onAddBntClick,
    showAddUserForm,
    toggleShowAddUserForm,
    error,
  } = useUsersSettings();

  return (
    <Container>
      <SettingsSectionTitle title='Користувачі' />
      <ContentWrap>
        {isLoadingData ? (
          <Loader />
        ) : (
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
            <UsersList />
          </>
        )}
      </ContentWrap>
      {error && <ErrorMessage error={error} />}
    </Container>
  );
};

export default UsersSettings;
