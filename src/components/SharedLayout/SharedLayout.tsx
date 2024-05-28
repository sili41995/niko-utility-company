import { FC, Suspense } from 'react';
import { Container, Main, Section } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import Header from '@/components/Header';

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      {/* <Container><NavigationBar /></Container> */}

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
