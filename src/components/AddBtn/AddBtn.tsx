import { BtnTypes, IconSizes } from '@/constants';
import { FC } from 'react';
import { FcPlus } from 'react-icons/fc';
import { IProps } from './AddBtn.types';
import { BtnTitle, Button } from './AddBtn.styled';

const AddBtn: FC<IProps> = ({ title, onClick, disabled }) => (
  <Button type={BtnTypes.button} onClick={onClick} disabled={disabled}>
    <BtnTitle>{title}</BtnTitle>
    <FcPlus size={IconSizes.secondary} />
  </Button>
);

export default AddBtn;
