import { FC, Suspense } from 'react';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <Container>{/* <NavigationBar /> */}</Container>
      </Header>
      <Main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};

export default SharedLayout;
