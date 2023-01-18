import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
