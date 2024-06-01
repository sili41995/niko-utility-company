import { FC } from 'react';
import { IProps } from './PaginationTitle.types';
import { Accent, Title } from './PaginationTitle.styled';

const PaginationTitle: FC<IProps> = ({ start, end, totalCount }) => (
  <Title>
    Показано з {start} по {end} запис з <Accent>{totalCount}</Accent>{' '}
    (відфільтровано з <Accent>_____</Accent> записів)
  </Title>
);

export default PaginationTitle;
