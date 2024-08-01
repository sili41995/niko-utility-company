import { FC } from 'react';
import { IProps } from './UsersListItem.types';
import {
  ListItem,
  Name,
  Title,
  TitleWrap,
  Login,
} from './UsersListItem.styled';

const UsersListItem: FC<IProps> = ({ user: { name, login } }) => {
  return (
    <ListItem>
      <TitleWrap>
        <Title>
          <Name>{name}</Name> : <Login>{login}</Login>
        </Title>
      </TitleWrap>
    </ListItem>
  );
};

export default UsersListItem;
