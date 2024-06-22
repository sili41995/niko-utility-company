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
  } = useSubscriberAccountsPage();

  return (
    <>
      {isLoadingData ? (
        <Loader />
      ) : (
        <Section paddingBottom={24} paddingTop={24}>
          <Container>
            {showSubscriberAccountsTable ? (
              <>
                <SubscriberAccountsTable />
                {totalCount && (
                  <Pagination
                    count={count}
                    totalCount={totalCount}
                    isLoading={isLoading}
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
