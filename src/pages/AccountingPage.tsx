import Accounting from '@/components/Accounting';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import { useCurrentPeriodData } from '@/hooks';
import { FC, useEffect } from 'react';

const AccountingPage: FC = () => {
  const isLoadingData = useCurrentPeriodData();

  useEffect(() => {}, []);

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
