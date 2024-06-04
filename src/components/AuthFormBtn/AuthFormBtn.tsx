import { FC } from 'react';
import { IProps } from './AuthFormBtn.types';
import Loader from '../Loader';
import { AriaLabels, BtnTypes } from '@/constants';
import { Button } from './AuthFormBtn.styled';

const AuthFormBtn: FC<IProps> = ({ title, disabled }) => (
  <Button
    disabled={disabled}
    type={BtnTypes.submit}
    aria-label={AriaLabels.authBtn}
  >
    {disabled ? <Loader /> : title}
  </Button>
);

export default AuthFormBtn;
