import { FC } from 'react';
import { IProps } from './PaginationTitle.types';
import { Accent, Title } from './PaginationTitle.styled';

const PaginationTitle: FC<IProps> = ({
  start,
  end,
  totalCount,
  filteredCount,
}) => (
  <Title>
    Показано з {start} по {end} запис з <Accent>{filteredCount}</Accent>{' '}
    (відфільтровано з <Accent>{totalCount}</Accent> записів)
  </Title>
);

export default PaginationTitle;
