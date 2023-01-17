import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
      <Outlet />
    </>
  );
};
