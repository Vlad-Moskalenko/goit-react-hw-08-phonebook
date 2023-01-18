import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth)
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
