import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC } from 'react';
import SubscriberAccountsTable from '@/components/SubscriberAccountsTable';
import { GeneralParams, Messages } from '@/constants';
import Pagination from '@/components/Pagination';
import NavBar from '@/components/NavBar';
import AddSubscriberAccountModalWin from '@/components/AddSubscriberAccountModalWin';
import DefaultMessage from '@/components/DefaultMessage';
import Loader from '@/components/Loader';
import { useSubscriberAccountsPage } from '@/hooks';
import SubscriberAccountsFilter from '@/components/SubscriberAccountsFilter';

const SubscriberAccountsPage: FC = () => {
  const {
    isLoadingData,
    showSubscriberAccountsTable,
    count,
    totalCount,
    setModalWinState,
    showModalWin,
    isLoading,
    filteredCount,
    isEmptyFilteredList,
  } = useSubscriberAccountsPage();
  const showPagination = filteredCount && totalCount;

  return (
    <>
      {isLoadingData ? (
        <Loader />
      ) : (
        <Section paddingBottom={24} paddingTop={24}>
          <Container>
            {showSubscriberAccountsTable ? (
              <>
                <SubscriberAccountsFilter />
                {!isEmptyFilteredList && (
                  <>
                    <SubscriberAccountsTable />
                    {showPagination && (
                      <Pagination
                        count={count}
                        totalCount={totalCount}
                        isLoading={isLoading}
                        filteredCount={filteredCount}
                        quantity={Number(GeneralParams.recordLimit)}
                      />
                    )}
                  </>
                )}
                {isEmptyFilteredList && (
                  <DefaultMessage
                    message={Messages.emptyFilteredSubscriberAccountsList}
                  />
                )}
              </>
            ) : (
              <DefaultMessage message={Messages.emptySubscriberAccountsList} />
            )}
          </Container>
        </Section>
      )}
      <NavBar action={setModalWinState} />
      {showModalWin && (
        <AddSubscriberAccountModalWin setModalWinState={setModalWinState} />
      )}
    </>
  );
};

export default SubscriberAccountsPage;
