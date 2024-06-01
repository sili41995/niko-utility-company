import { FC } from 'react';
import PaginationTitle from '@/components/PaginationTitle';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
import { Container } from './Pagination.styled';
import { IProps } from './Pagination.types';

const Pagination: FC<IProps> = ({ count, totalCount }) => {
  const { searchParams } = useSetSearchParams();
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const start = (currentPage - 1) * count + 1;
  const end = currentPage * count;

  return (
    <Container>
      <PaginationTitle start={start} end={end} totalCount={totalCount} />
    </Container>
  );
};

export default Pagination;
