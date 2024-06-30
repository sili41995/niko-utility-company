import { FC } from 'react';
import { IProps } from './SubmitFormBtn.types';
import Loader from '../Loader';
import { AriaLabels, BtnTypes } from '@/constants';
import { Button } from './SubmitFormBtn.styled';

const SubmitFormBtn: FC<IProps> = ({ title, isLoading }) => (
  <Button
    disabled={isLoading}
    type={BtnTypes.submit}
    aria-label={AriaLabels.submit}
  >
    {isLoading ? <Loader /> : title}
  </Button>
);

export default SubmitFormBtn;
