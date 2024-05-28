import { FC } from 'react';
import { IProps } from './PublicRoute.types';

const PublicRoute: FC<IProps> = ({ element }) => {
  // export const PublicRoute = ({ element, restricted = false }: IProps) => {
  //   const isLoggedIn = useAuthStore(selectIsLoggedIn);
  //   const location = useLocation();
  //   const shouldRedirect = isLoggedIn && restricted;
  //   const defaultGoBackPath = `/${PagePaths.contactsPath}`;
  //   const goBackPath = location.state?.from ?? defaultGoBackPath;
  //   const isShowWarnToast = location.state && !isLoggedIn;

  //   useEffect(() => {
  //     isShowWarnToast && toasts.warnToast('Please, authenticate in the app');
  //   });

  //   return shouldRedirect ? <Navigate to={goBackPath} /> : element;
  return element;
};

export default PublicRoute;
