import { FC } from 'react';
import PaginationTitle from '@/components/PaginationTitle';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
import { Container } from './Pagination.styled';
import { IProps } from './Pagination.types';
import PaginationBar from '@/components/PaginationBar';

const Pagination: FC<IProps> = ({
  totalCount,
  count,
  isLoading,
  filteredCount,
  quantity,
  showTitle = true,
}) => {
  const { searchParams } = useSetSearchParams();
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const start = (currentPage - 1) * quantity + 1;
  const end = (currentPage - 1) * quantity + count;
  const showPaginationBar = filteredCount > count;
  const showPaginationTitle = !isLoading && showTitle;

  return (
    <Container>
      {showPaginationTitle && (
        <PaginationTitle
          start={start}
          end={end}
          totalCount={totalCount}
          filteredCount={filteredCount}
        />
      )}
      {showPaginationBar && (
        <PaginationBar totalCount={filteredCount} quantity={quantity} />
      )}
    </Container>
  );
};

export default Pagination;
