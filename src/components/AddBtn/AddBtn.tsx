import { IconSizes } from '@/constants';
import { FC } from 'react';
import { FcPlus } from 'react-icons/fc';
import { IProps } from './AddBtn.types';
import { BtnTitle, Button } from './AddBtn.styled';

const AddBtn: FC<IProps> = ({ title, onClick }) => (
  <Button type='button' onClick={onClick}>
    <BtnTitle>{title}</BtnTitle>
    <FcPlus size={IconSizes.secondary} />
  </Button>
);

export default AddBtn;
