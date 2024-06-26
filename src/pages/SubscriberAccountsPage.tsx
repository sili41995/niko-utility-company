import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC } from 'react';
import SubscriberAccountsTable from '@/components/SubscriberAccountsTable';
import { Messages } from '@/constants';
import Pagination from '@/components/Pagination';
import NavBar from '@/components/NavBar';
import AddSubscriberAccountModalWin from '@/components/AddSubscriberAccountModalWin';
import DefaultMessage from '@/components/DefaultMessage';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import { useSubscriberAccountsPage } from '@/hooks';
import Filter from '@/components/Filter';

const SubscriberAccountsPage: FC = () => {
  const {
    isLoadingData,
    showSubscriberAccountsTable,
    count,
    totalCount,
    error,
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
                <Filter />
                {!isEmptyFilteredList && (
                  <>
                    <SubscriberAccountsTable />
                    {showPagination && (
                      <Pagination
                        count={count}
                        totalCount={totalCount}
                        isLoading={isLoading}
                        filteredCount={filteredCount}
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
            {error && <ErrorMessage error={error} />}
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
