import { FC } from 'react';
import AddPaymentForm from '@/components/AddPaymentForm';
import PaymentsTable from '@/components/PaymentsTable';
import Loader from '@/components/Loader';
import { Container, TableWrap } from './PaymentsSection.styled';
import { IProps } from './PaymentsSection.types';
import { GeneralParams } from '@/constants';
import Pagination from '@/components/Pagination';
import { usePaymentsSection } from '@/hooks';

const PaymentsSection: FC<IProps> = ({
  subscriberAccount,
  resetSubscriberAccount,
}) => {
  const {
    isLoaded,
    isLoading,
    showPagination,
    totalCount,
    count,
    showPaymentsTable,
  } = usePaymentsSection();
  const showPaginationBar = showPagination && totalCount;

  return (
    <Container>
      <AddPaymentForm
        subscriberAccount={subscriberAccount}
        resetSubscriberAccount={resetSubscriberAccount}
      />
      {isLoaded ? (
        showPaymentsTable && (
          <TableWrap>
            <PaymentsTable />
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
      )}
    </Container>
  );
};

export default PaymentsSection;
