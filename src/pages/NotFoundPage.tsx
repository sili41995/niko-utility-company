import Container from '@/components/Container';
import NotFound from '@/components/NotFound';
import Section from '@/components/Section';
import { FC } from 'react';

const NotFoundPage: FC = () => (
  <Section paddingBottom={24} paddingTop={24}>
    <Container>
      <NotFound />
    </Container>
  </Section>
);

export default NotFoundPage;
