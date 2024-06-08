import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC, useState } from 'react';
import SubscribersTable from '@/components/SubscribersTable';
import { GeneralParams } from '@/constants';
import Pagination from '@/components/Pagination';
import NavBar from '@/components/NavBar';
import AddSubscriberAccountModalWin from '@/components/AddSubscriberAccountModalWin';

const SubscribersPage: FC = () => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const count = Number(GeneralParams.recordLimit);
  const totalCount = 200;
  //  const count = ;
  //  const totalCount = ;

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return (
    <>
      <Section paddingBottom={24} paddingTop={24}>
        <Container>
          <SubscribersTable />
          <Pagination count={count} totalCount={totalCount} />
        </Container>
      </Section>
      <NavBar action={setModalWinState} />
      {showModalWin && (
        <AddSubscriberAccountModalWin setModalWinState={setModalWinState} />
      )}
    </>
  );
};

export default SubscribersPage;
