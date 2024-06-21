import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC, useEffect, useState } from 'react';
import SubscriberAccountsTable from '@/components/SubscriberAccountsTable';
import { GeneralParams, Messages } from '@/constants';
import Pagination from '@/components/Pagination';
import NavBar from '@/components/NavBar';
import AddSubscriberAccountModalWin from '@/components/AddSubscriberAccountModalWin';
import { useSubscriberAccountsStore } from '@/store/store';
import {
  selectCount,
  selectFetchSubscriberAccounts,
} from '@/store/subscriberAccounts/selectors';
import DefaultMessage from '@/components/DefaultMessage';

const SubscriberAccountsPage: FC = () => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const count = Number(GeneralParams.recordLimit);
  const totalCount = useSubscriberAccountsStore(selectCount);
  const fetchSubscriberAccounts = useSubscriberAccountsStore(
    selectFetchSubscriberAccounts
  );
  // const showPaginationBar = totalCount && totalCount > count;
  const showSubscriberAccountsTable = totalCount && Boolean(totalCount);

  useEffect(() => {
    fetchSubscriberAccounts();
  }, [fetchSubscriberAccounts]);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return (
    <>
      <Section paddingBottom={24} paddingTop={24}>
        <Container>
          {showSubscriberAccountsTable ? (
            <>
              <SubscriberAccountsTable />
              <Pagination count={count} totalCount={totalCount} />
            </>
          ) : (
            <DefaultMessage message={Messages.emptySubscriberAccountsList} />
          )}
        </Container>
      </Section>
      <NavBar action={setModalWinState} />
      {showModalWin && (
        <AddSubscriberAccountModalWin setModalWinState={setModalWinState} />
      )}
    </>
  );
};

export default SubscriberAccountsPage;
