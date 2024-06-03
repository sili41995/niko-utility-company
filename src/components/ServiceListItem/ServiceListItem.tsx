import { FC } from 'react';
import { IProps } from './ServiceListItem.types';
import {
  AddServiceBtn,
  List,
  ListItem,
  Title,
  TitleWrap,
} from './ServiceListItem.styled';
import { IoIosAdd } from 'react-icons/io';
import { IconSizes } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import Checkbox from '../Checkbox';

const ServiceListItem: FC<IProps> = ({ services, title }) => {
  const onInputChange = (e: InputChangeEvent): void => {
    console.dir(e.target.checked);
  };

  return (
    <>
      <TitleWrap>
        <Title>{title}:</Title>
        <AddServiceBtn type='button'>
          <IoIosAdd size={IconSizes.secondary} />
        </AddServiceBtn>
      </TitleWrap>
      <List>
        {services.map(({ id, isActive, name, category }) => (
          <ListItem key={id}>
            <Title>{name}</Title>
            <Checkbox
              checked={isActive}
              name={category}
              onChange={onInputChange}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ServiceListItem;
