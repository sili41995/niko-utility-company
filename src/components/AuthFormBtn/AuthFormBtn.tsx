import { FC } from 'react';
import { IProps } from './AuthFormBtn.types';
import Loader from '../Loader';
import { AriaLabels } from '@/constants';

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
