import { FC } from 'react';
import { IProps } from './NavSections.types';
import { Link } from 'react-router-dom';
import {
  Desc,
  ListItem,
  SectionsList,
  TittleWrap,
  Title,
  DescWrap,
} from './NavSections.styled';
import { getNavSectionDesc } from '@/utils';

const NavSections: FC<IProps> = ({ navSections }) => {
  return (
    <SectionsList>
      {navSections.map(({ desc, path, title }) => {
        const description = getNavSectionDesc(desc);

        return (
          <ListItem key={title}>
            <Link to={path}>
              <TittleWrap path={path}>
                <Title>{title}</Title>
              </TittleWrap>
              <DescWrap>
                {description.map((desc) => (
                  <Desc key={desc}>{desc}</Desc>
                ))}
              </DescWrap>
            </Link>
          </ListItem>
        );
      })}
    </SectionsList>
  );
};

export default NavSections;
