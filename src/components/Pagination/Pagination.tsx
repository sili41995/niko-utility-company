import { FC } from 'react';
import PaginationTitle from '@/components/PaginationTitle';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
import { Container } from './Pagination.styled';
import { IProps } from './Pagination.types';
import PaginationBar from '../PaginationBar';

const Pagination: FC<IProps> = ({ totalCount, count }) => {
  const { searchParams } = useSetSearchParams();
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const start = (currentPage - 1) * count + 1;
  const end = currentPage * count;
  const showPaginationBar = totalCount > count;

  return (
    <Container>
      <PaginationTitle start={start} end={end} totalCount={totalCount} />
      {showPaginationBar && <PaginationBar totalCount={totalCount} />}
    </Container>
  );
};

export default Pagination;
