import { FC } from 'react';
import { IProps } from './SubmitFormBtn.types';
import Loader from '@/components/Loader';
import { AriaLabels, BtnTypes } from '@/constants';
import { Button } from './SubmitFormBtn.styled';

const SubmitFormBtn: FC<IProps> = ({ title, isLoading, disabled = false }) => (
  <Button
    disabled={isLoading || disabled}
    type={BtnTypes.submit}
    aria-label={AriaLabels.submit}
    disabledBnt={disabled}
  >
    {isLoading ? <Loader /> : title}
  </Button>
);

export default SubmitFormBtn;
