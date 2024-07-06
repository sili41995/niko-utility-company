import { FC } from 'react';
import { Button } from './AccountingSectionsBtn.styled';
import { IProps } from './AccountingSectionsBtn.types';

const AccountingSectionsBtn: FC<IProps> = ({ onClick, title }) => (
  <Button type='button' onClick={onClick}>
    {title}
  </Button>
);

export default AccountingSectionsBtn;
