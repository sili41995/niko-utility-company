import { FC } from 'react';
import { IProps } from './ClearFilterBtn.types';
import { Button } from './ClearFilterBtn.styled';
import { AriaLabels, IconSizes } from '@/constants';
import { CgClose } from 'react-icons/cg';

const ClearFilterBtn: FC<IProps> = ({ onClick, show }) => (
  <Button
    aria-label={AriaLabels.clearFilter}
    type='button'
    onClick={onClick}
    show={show}
  >
    <CgClose size={IconSizes.other} />
  </Button>
);

export default ClearFilterBtn;
