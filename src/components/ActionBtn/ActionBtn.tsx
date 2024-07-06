import { FC } from 'react';
import { IProps } from './ActionBtn.types';
import Loader from '@/components/Loader';
import { BtnTypes } from '@/constants';
import { Button } from './ActionBtn.styled';

const ActionBtn: FC<IProps> = ({ title, isLoading, onBtnClick }) => (
  <Button disabled={isLoading} type={BtnTypes.button} onClick={onBtnClick}>
    {isLoading ? <Loader /> : title}
  </Button>
);

export default ActionBtn;
