import { FC } from 'react';
import { IProps } from './NavSections.types';
import { Link } from 'react-router-dom';
import {
  Desc,
  ListItem,
  SectionsList,
  TittleWrap,
  Title,
} from './NavSections.styled';

const NavSections: FC<IProps> = ({ navSections }) => {
  return (
    <SectionsList>
      {navSections.map(({ desc, path, title }) => (
        <ListItem key={title}>
          <Link to={path}>
            <TittleWrap>
              <Title>{title}</Title>
            </TittleWrap>
            <Desc>{desc}</Desc>
          </Link>
        </ListItem>
      ))}
    </SectionsList>
  );
};

export default NavSections;
