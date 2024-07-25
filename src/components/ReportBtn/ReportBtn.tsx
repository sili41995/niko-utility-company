import { FC } from 'react';
import { IProps } from './ReportBtn.types';
import { Button } from './ReportBtn.styled';

const ReportBtn: FC<IProps> = ({ onClick, title }) => (
  <Button type='button' onClick={onClick}>
    {title}
  </Button>
);

export default ReportBtn;
