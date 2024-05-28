import { FC, lazy } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import PublicRoute from './PublicRoute';

const SignInPage = lazy(() => import('@/pages/SignInPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={PagePaths.root} element={<SharedLayout />}>
        <Route
          index
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.signInPath}
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route path='*' element={<PublicRoute element={<NotFoundPage />} />} />
      </Route>
    </Routes>
  );
};

export default App;
