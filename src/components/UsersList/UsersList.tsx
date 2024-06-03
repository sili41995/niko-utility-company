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
  Username,
  AccessName,
} from './UsersList.styled';
import { users } from '@/data/users';
import Checkbox from '../Checkbox';
import { InputChangeEvent } from '@/types/types';
import { CheckboxNames } from '@/constants';

const UsersList: FC = () => {
  const onInputChange = (e: InputChangeEvent): void => {
    console.log(e);
  };

  return (
    <List>
      {users.map(
        ({
          id,
          name,
          username,
          accounting,
          counters,
          documents,
          houses,
          fullAccess,
          oneOffJobs,
          settings,
          subscribers,
        }) => (
          <ListItem key={id}>
            <TitleWrap>
              <Title>
                <Name>{name}</Name> : <Username>{username}</Username>
              </Title>
            </TitleWrap>
            <AccessList>
              <AccessListItem>
                <AccessWrap>
                  <AccessName>Загальний доступ:</AccessName>
                  <Checkbox
                    checked={fullAccess}
                    onChange={onInputChange}
                    name={CheckboxNames.access}
                  />
                </AccessWrap>
              </AccessListItem>
              <AccessListItem>
                <AccessWrap>
                  <AccessName>Характеристики будинків:</AccessName>
                  <Checkbox
                    checked={houses}
                    onChange={onInputChange}
                    name={CheckboxNames.access}
                  />
                </AccessWrap>
              </AccessListItem>
              <AccessListItem>
                <AccessWrap>
                  <AccessName>Абонентські рахунки:</AccessName>
                  <Checkbox
                    checked={subscribers}
                    onChange={onInputChange}
                    name={CheckboxNames.access}
                  />
                </AccessWrap>
              </AccessListItem>
              <AccessListItem>
                <AccessWrap>
                  <AccessName>Бухгалтерія:</AccessName>
                  <Checkbox
                    checked={accounting}
                    onChange={onInputChange}
                    name={CheckboxNames.access}
                  />
                </AccessWrap>
              </AccessListItem>
              <AccessListItem>
                <AccessWrap>
                  <AccessName>Документи:</AccessName>
                  <Checkbox
                    checked={documents}
                    onChange={onInputChange}
                    name={CheckboxNames.access}
                  />
                </AccessWrap>
              </AccessListItem>
              <AccessListItem>
                <AccessWrap>
                  <AccessName>Лічильники:</AccessName>
                  <Checkbox
                    checked={counters}
                    onChange={onInputChange}
                    name={CheckboxNames.access}
                  />
                </AccessWrap>
              </AccessListItem>
              <AccessListItem>
                <AccessWrap>
                  <AccessName>Виконавці</AccessName>
                  <Checkbox
                    checked={oneOffJobs}
                    onChange={onInputChange}
                    name={CheckboxNames.access}
                  />
                </AccessWrap>
              </AccessListItem>
              <AccessListItem>
                <AccessWrap>
                  <AccessName>Налаштування</AccessName>
                  <Checkbox
                    checked={settings}
                    onChange={onInputChange}
                    name={CheckboxNames.access}
                  />
                </AccessWrap>
              </AccessListItem>
            </AccessList>
          </ListItem>
        )
      )}
    </List>
  );
};

export default UsersList;
