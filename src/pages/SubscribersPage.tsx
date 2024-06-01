import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC } from 'react';
import SubscribersTable from '@/components/SubscribersTable';

const SubscribersPage: FC = () => {
  return (
    <Section paddingBottom={24} paddingTop={24}>
      <Container>
        <SubscribersTable />
      </Container>
    </Section>
  );
};

export default SubscribersPage;
