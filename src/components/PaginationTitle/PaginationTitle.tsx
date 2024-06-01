import { FC } from 'react';
import { IProps } from './PaginationTitle.types';

const PaginationTitle: FC<IProps> = ({ start, end, totalCount }) => (
  <p>
    Показано з {start} по {end} запис з {totalCount} (відфільтровано з _____
    записів)
  </p>
);

export default PaginationTitle;
