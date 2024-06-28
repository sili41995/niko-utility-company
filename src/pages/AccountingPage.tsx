import Accounting from '@/components/Accounting';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC } from 'react';

const AccountingPage: FC = () => {
  return (
    <Section paddingBottom={24} paddingTop={24}>
      <Container>
        <Accounting />
      </Container>
    </Section>
  );
};

export default AccountingPage;
