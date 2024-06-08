import { IconSizes, PagePaths } from '@/constants';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FC } from 'react';
import { MdHome, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IProps } from './NavBar.types';
import { Button, Container } from './NavBar.styled';

const NavBar: FC<IProps> = ({ action }) => {
  const onBtnClick = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);
    action && action(e);
  };

  return (
    <Container>
      <Link to={PagePaths.dashboard}>
        <MdHome size={IconSizes.primary} />
      </Link>
      {action && (
        <Button type='button' onClick={onBtnClick}>
          <MdAdd size={IconSizes.primary} />
        </Button>
      )}
    </Container>
  );
};

export default NavBar;
