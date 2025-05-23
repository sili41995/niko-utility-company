import { FC, lazy, useEffect } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import PublicRoute from './PublicRoute';
import Loader from './Loader';
import PrivateRoute from './PrivateRoute';
import { useAuthStore } from '@/store/store';
import {
  selectIsRefreshing,
  selectFetchProfile,
  selectToken,
} from '@/store/auth/selectors';

const SignInPage = lazy(() => import('@/pages/SignInPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const SubscriberAccountsPage = lazy(
  () => import('@/pages/SubscriberAccountsPage')
);
const AccountingPage = lazy(() => import('@/pages/AccountingPage'));
const DocumentsPage = lazy(() => import('@/pages/DocumentsPage'));

const App: FC = () => {
  const isRefreshing = useAuthStore(selectIsRefreshing);
  const token = useAuthStore(selectToken);
  const fetchProfile = useAuthStore(selectFetchProfile);

  useEffect(() => {
    const getProfile = async () => {
      await fetchProfile();
    };

    token && getProfile();
  }, [fetchProfile, token]);

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
        />
        <Route
          path={PagePaths.subscriberAccounts}
          element={<PrivateRoute element={<SubscriberAccountsPage />} />}
        />
        <Route
          path={PagePaths.accounting}
          element={<PrivateRoute element={<AccountingPage />} />}
        />
        <Route
          path={PagePaths.documents}
          element={<PrivateRoute element={<DocumentsPage />} />}
        />
        <Route path='*' element={<PublicRoute element={<NotFoundPage />} />} />
      </Route>
    </Routes>
  );
};

export default App;
