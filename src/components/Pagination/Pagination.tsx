import { FC } from 'react';
import PaginationTitle from '@/components/PaginationTitle';
import { useSetSearchParams } from '@/hooks';
import { GeneralParams, SearchParamsKeys } from '@/constants';
import { Container } from './Pagination.styled';
import { IProps } from './Pagination.types';
import PaginationBar from '@/components/PaginationBar';

const Pagination: FC<IProps> = ({
  totalCount,
  count,
  isLoading,
  filteredCount,
}) => {
  const { searchParams } = useSetSearchParams();
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const start = (currentPage - 1) * GeneralParams.recordLimit + 1;
  const end = (currentPage - 1) * GeneralParams.recordLimit + count;
  const showPaginationBar = filteredCount > count;

  return (
    <Container>
      {!isLoading && (
        <PaginationTitle
          start={start}
          end={end}
          totalCount={totalCount}
          filteredCount={filteredCount}
        />
      )}
      {showPaginationBar && <PaginationBar totalCount={filteredCount} />}
    </Container>
  );
};

export default Pagination;
