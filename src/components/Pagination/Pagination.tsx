import { FC } from 'react';
import PaginationTitle from '@/components/PaginationTitle';
import { useSetSearchParams } from '@/hooks';
import { GeneralParams, SearchParamsKeys } from '@/constants';
import { Container } from './Pagination.styled';
import { IProps } from './Pagination.types';
import PaginationBar from '../PaginationBar';

const Pagination: FC<IProps> = ({ totalCount }) => {
  const { searchParams } = useSetSearchParams();
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const start = (currentPage - 1) * GeneralParams.recordLimit + 1;
  const end = currentPage * GeneralParams.recordLimit;

  return (
    <Container>
      <PaginationTitle start={start} end={end} totalCount={totalCount} />
      <PaginationBar totalCount={totalCount} />
    </Container>
  );
};

export default Pagination;
