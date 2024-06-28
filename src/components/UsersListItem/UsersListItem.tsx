import { FC } from 'react';
import { IProps } from './UsersListItem.types';
import {
  AccessWrap,
  AccessList,
  AccessListItem,
  ListItem,
  Name,
  Title,
  TitleWrap,
  Login,
  AccessName,
} from './UsersListItem.styled';
import Checkbox from '../Checkbox';
import { AccessKeys } from '@/constants';
import { useUser } from '@/hooks';

const UsersListItem: FC<IProps> = ({ user }) => {
  const {
    name,
    login,
    fullAccess,
    onInputChange,
    isCurrentUser,
    houses,
    subscribers,
    accounting,
    documents,
    counters,
    oneOffJobs,
    settings,
  } = useUser(user);

  return (
    <ListItem>
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
};

export default UsersListItem;
