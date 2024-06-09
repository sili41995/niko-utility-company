import { FC } from 'react';
import {
  AccessWrap,
  AccessList,
  AccessListItem,
  List,
  ListItem,
  Name,
  Title,
  TitleWrap,
  Login,
  AccessName,
} from './UsersList.styled';
import Checkbox from '../Checkbox';
import { InputChangeEvent } from '@/types/types';
import { AccessKeys } from '@/constants';
import { useAuthStore, useUsersStore } from '@/store/store';
import { selectChangeAccessStatus, selectUsers } from '@/store/users/selectors';
import { selectUser } from '@/store/auth/selectors';

const UsersList: FC = () => {
  const user = useAuthStore(selectUser);
  const changeAccessStatus = useUsersStore(selectChangeAccessStatus);
  const users = useUsersStore(selectUsers);

  return (
    <List>
      {users.map(
        ({
          id,
          name,
          login,
          accounting,
          counters,
          documents,
          houses,
          fullAccess,
          oneOffJobs,
          settings,
          subscribers,
        }) => {
          const isCurrentUser = user.id === id && !user.fullAccess;

          const onInputChange = (e: InputChangeEvent): void => {
            const { checked, name } = e.currentTarget;
            changeAccessStatus({
              data: { [name]: checked },
              id,
              accessKey: name,
            });
          };

          return (
            <ListItem key={id}>
              <TitleWrap>
                <Title>
                  <Name>{name}</Name> : <Login>{login}</Login>
                </Title>
              </TitleWrap>
              <AccessList>
                <AccessListItem>
                  <AccessWrap>
                    <AccessName>Загальний доступ:</AccessName>
                    <Checkbox
                      checked={fullAccess}
                      onChange={onInputChange}
                      name={AccessKeys.fullAccess}
                      disabled={isCurrentUser}
                    />
                  </AccessWrap>
                </AccessListItem>
                <AccessListItem>
                  <AccessWrap>
                    <AccessName>Характеристики будинків:</AccessName>
                    <Checkbox
                      checked={houses}
                      onChange={onInputChange}
                      name={AccessKeys.houses}
                      disabled={isCurrentUser}
                    />
                  </AccessWrap>
                </AccessListItem>
                <AccessListItem>
                  <AccessWrap>
                    <AccessName>Абонентські рахунки:</AccessName>
                    <Checkbox
                      checked={subscribers}
                      onChange={onInputChange}
                      name={AccessKeys.subscribers}
                      disabled={isCurrentUser}
                    />
                  </AccessWrap>
                </AccessListItem>
                <AccessListItem>
                  <AccessWrap>
                    <AccessName>Бухгалтерія:</AccessName>
                    <Checkbox
                      checked={accounting}
                      onChange={onInputChange}
                      name={AccessKeys.accounting}
                      disabled={isCurrentUser}
                    />
                  </AccessWrap>
                </AccessListItem>
                <AccessListItem>
                  <AccessWrap>
                    <AccessName>Документи:</AccessName>
                    <Checkbox
                      checked={documents}
                      onChange={onInputChange}
                      name={AccessKeys.documents}
                      disabled={isCurrentUser}
                    />
                  </AccessWrap>
                </AccessListItem>
                <AccessListItem>
                  <AccessWrap>
                    <AccessName>Лічильники:</AccessName>
                    <Checkbox
                      checked={counters}
                      onChange={onInputChange}
                      name={AccessKeys.counters}
                      disabled={isCurrentUser}
                    />
                  </AccessWrap>
                </AccessListItem>
                <AccessListItem>
                  <AccessWrap>
                    <AccessName>Виконавці</AccessName>
                    <Checkbox
                      checked={oneOffJobs}
                      onChange={onInputChange}
                      name={AccessKeys.oneOffJobs}
                      disabled={isCurrentUser}
                    />
                  </AccessWrap>
                </AccessListItem>
                <AccessListItem>
                  <AccessWrap>
                    <AccessName>Налаштування</AccessName>
                    <Checkbox
                      checked={settings}
                      onChange={onInputChange}
                      name={AccessKeys.settings}
                      disabled={isCurrentUser}
                    />
                  </AccessWrap>
                </AccessListItem>
              </AccessList>
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default UsersList;
