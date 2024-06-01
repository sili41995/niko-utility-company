import Container from '@/components/Container';
import Section from '@/components/Section';
import HousesTable from '@/components/HousesTable';
import { FC } from 'react';
import Pagination from '@/components/Pagination';
import { GeneralParams } from '@/constants';

const HousesPage: FC = () => {
  const count = Number(GeneralParams.recordLimit);
  const totalCount = 200;
  //  const count = ;
  //  const totalCount = ;

  return (
    <Section paddingBottom={24} paddingTop={24}>
      <Container>
        <HousesTable />
        <Pagination count={count} totalCount={totalCount} />
      </Container>
    </Section>
  );
};

export default HousesPage;
