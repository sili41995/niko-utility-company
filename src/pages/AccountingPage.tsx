import Accounting from '@/components/Accounting';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import { usePeriodsData } from '@/hooks';
import { FC } from 'react';

const AccountingPage: FC = () => {
  const isLoadingData = usePeriodsData();

  return isLoadingData ? (
    <Loader />
  ) : (
    <Section paddingBottom={24} paddingTop={24}>
      <Container>
        <Accounting />
      </Container>
    </Section>
  );
};

export default AccountingPage;
