import { FC } from 'react';
import { IProps } from './PrivateRoute.types';

const PrivateRoute: FC<IProps> = ({ element }) => {
  //   const isLoggedIn = useAuthStore(selectIsLoggedIn);
  //   const isRefreshing = useAuthStore(selectIsRefreshing);
  //   const location = useLocation();
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  //   const homePath = `/${PagePaths.signInPath}`;

  //   return shouldRedirect ? (
  // <Navigate to={homePath} state={{ from: location }} />
  //   ) : (
  // element
  //   );
  return element;
};

export default PrivateRoute;
