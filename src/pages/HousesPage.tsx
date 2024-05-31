import Container from '@/components/Container';
import Section from '@/components/Section';
import Table from '@/components/Table';
import { houses } from '@/data/houses';
import { FC } from 'react';

const HousesPage: FC = () => {
  return (
    <Section paddingBottom={24} paddingTop={24}>
      <Container>
        <Table data={houses} />
      </Container>
    </Section>
  );
};

export default HousesPage;
