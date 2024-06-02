import { FC } from 'react';
import { IProps } from './ServiceListItem.types';
import { AddServiceBtn, Title, TitleWrap } from './ServiceListItem.styled';
import { IoIosAdd } from 'react-icons/io';
import { IconSizes } from '@/constants';
import { InputChangeEvent } from '@/types/types';

const ServiceListItem: FC<IProps> = ({ services, title }) => {
  const onChange = (e: InputChangeEvent): void => {
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
      <ul>
        {services.map(({ id, isActive, name, category }) => {
          console.log(isActive);
          return (
            <li key={id}>
              <p>{name}</p>
              <input
                type='checkbox'
                name={category}
                checked={isActive}
                onChange={onChange}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ServiceListItem;
