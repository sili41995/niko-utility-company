import { FC } from 'react';
import { IProps } from './PublicRoute.types';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn } from '@/store/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';

const PublicRoute: FC<IProps> = ({ element, restricted = false }) => {
  const isLoggedIn = useAuthStore(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const defaultGoBackPath = PagePaths.dashboard;
  const goBackPath = location.state?.from ?? defaultGoBackPath;

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
