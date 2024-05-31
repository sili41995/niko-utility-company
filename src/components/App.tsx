import { FC, lazy, useEffect } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import PublicRoute from './PublicRoute';
import Loader from './Loader';
import PrivateRoute from './PrivateRoute';

const SignInPage = lazy(() => import('@/pages/SignInPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const HousesPage = lazy(() => import('@/pages/HousesPage'));

const App: FC = () => {
  // const isRefreshing = useAuthStore(selectIsRefreshing);
  const isRefreshing = false;
  // const token = useAuthStore(selectToken);
  const token = null;
  // const refreshUser = useAuthStore(selectRefreshUser);

  useEffect(() => {
    if (!token) {
      return;
    }

    // refreshUser();
  }, [token]);

  return isRefreshing ? (
    <Loader />
  ) : (
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
        <Route
          path={PagePaths.dashboard}
          element={<PrivateRoute element={<DashboardPage />} />}
        />{' '}
        <Route
          path={PagePaths.houses}
          element={<PrivateRoute element={<HousesPage />} />}
        />
        <Route path='*' element={<PublicRoute element={<NotFoundPage />} />} />
      </Route>
    </Routes>
  );
};

export default App;
