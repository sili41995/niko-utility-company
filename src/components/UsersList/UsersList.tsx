import { FC } from 'react';
import { List } from './UsersList.styled';
import { useUsersStore } from '@/store/store';
import { selectUsers } from '@/store/users/selectors';
import UsersListItem from '@/components/UsersListItem';

const UsersList: FC = () => {
  const users = useUsersStore(selectUsers);

  return (
    <List>
      {users.map((user) => (
        <UsersListItem user={user} key={user.id} />
      ))}
    </List>
  );
};

export default UsersList;
