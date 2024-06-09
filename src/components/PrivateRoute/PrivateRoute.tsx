import { FC } from 'react';
import { IProps } from './PrivateRoute.types';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn, selectIsRefreshing } from '@/store/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useAuthStore(selectIsLoggedIn);
  const isRefreshing = useAuthStore(selectIsRefreshing);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const homePath = PagePaths.signInPath;

  return shouldRedirect ? (
    <Navigate to={homePath} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
