import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { Container, ContentWrap } from './UsersSettings.styled';
import UsersList from '../UsersList';
import AddUserForm from '../AddUserForm';
import AddDataModalForm from '../AddDataModalForm';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
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
