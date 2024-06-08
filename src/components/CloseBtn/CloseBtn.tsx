import { AriaLabels, IconSizes } from '@/constants';
import { FC } from 'react';
import { CgClose } from 'react-icons/cg';
import { Button } from './CloseBtn.styled';
import { IProps } from './CloseBtn.types';

const CloseBtn: FC<IProps> = ({ onClick }) => (
  <Button aria-label={AriaLabels.closeBtn} onClick={onClick} type='button'>
    <CgClose size={IconSizes.secondary} />
  </Button>
);

export default CloseBtn;
