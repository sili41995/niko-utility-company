import Container from '@/components/Container';
import NavSections from '@/components/NavSections';
import PageTitle from '@/components/PageTitle';
import Section from '@/components/Section';
import { navSections } from '@/constants';
import { FC } from 'react';

const DashboardPage: FC = () => {
  return (
    <>
      <PageTitle title='Розрахунковий центр' />
      <Section paddingBottom={48} paddingTop={48}>
        <Container>
          <NavSections navSections={navSections} />
        </Container>
      </Section>
    </>
  );
};

export default DashboardPage;
