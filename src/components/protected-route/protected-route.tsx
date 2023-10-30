import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/user-data/user-data.selectors';
import { useAppSelector } from '../../hooks';

type ProtectedRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute({
  restrictedFor,
  redirectTo,
  children,
}: ProtectedRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return restrictedFor === authStatus ? <Navigate to={redirectTo} /> : children;
}

export default ProtectedRoute;
