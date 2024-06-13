import { FC } from 'react';
import { IProps } from './SubmitFormBtn.types';
import Loader from '../Loader';
import { AriaLabels, BtnTypes } from '@/constants';
import { Button } from './SubmitFormBtn.styled';

const SubmitFormBtn: FC<IProps> = ({ title, disabled }) => (
  <Button
    disabled={disabled}
    type={BtnTypes.submit}
    aria-label={AriaLabels.authBtn}
  >
    {disabled ? <Loader /> : title}
  </Button>
);

export default SubmitFormBtn;
