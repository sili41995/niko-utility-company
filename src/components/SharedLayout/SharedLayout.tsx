import { FC, Suspense } from 'react';
import { Main, Section } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '../Container';

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
      <Footer />
    </>
  );
};

export default SharedLayout;
