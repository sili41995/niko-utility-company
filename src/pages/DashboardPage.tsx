import Container from '@/components/Container';
import Loader from '@/components/Loader';
import NavSections from '@/components/NavSections';
import Section from '@/components/Section';
import { navSections } from '@/constants';
import { FC } from 'react';

const DashboardPage: FC = () => {
  const isLoading = false;
  // const isLoading = !isLoadedUsers;

  return isLoading ? (
    <Loader />
  ) : (
    <Section paddingBottom={48} paddingTop={48}>
      <Container>
        <NavSections navSections={navSections} />
      </Container>
    </Section>
  );
};

export default DashboardPage;
