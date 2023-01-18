import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

import css from './Layout.module.css';

export const Layout = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <div className={css.appWrapper}>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
      <Outlet />
    </div>
  );
};
