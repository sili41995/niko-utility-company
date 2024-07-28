import { FC } from 'react';
import PaymentsTable from '@/components/PaymentsTable';
import Loader from '@/components/Loader';
import { TableWrap } from './AllPaymentsTable.styled';
import { GeneralParams } from '@/constants';
import Pagination from '@/components/Pagination';
import { usePaymentsSection } from '@/hooks';

const AllPaymentsTable: FC = () => {
  const {
    isLoaded,
    isLoading,
    showPagination,
    totalCount,
    count,
    showPaymentsTable,
    payments,
  } = usePaymentsSection();
  const showPaginationBar = showPagination && totalCount;

  return isLoaded ? (
    showPaymentsTable && (
      <TableWrap>
        <PaymentsTable payments={payments} fullInfo />
        {showPaginationBar && (
          <Pagination
            totalCount={totalCount}
            count={count}
            filteredCount={totalCount}
            isLoading={isLoading}
            quantity={Number(GeneralParams.paymentsRecordLimit)}
            showTitle={false}
          />
        )}
      </TableWrap>
    )
  ) : (
    <Loader />
  );
};

export default AllPaymentsTable;
