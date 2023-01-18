import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from './AuthNavigation.module.css';
import { selectAuth } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AuthNavigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? (
    <UserMenu />
  ) : (
    <ul className={css.navigationList}>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.active} ${css.link}` : css.link
          }
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.active} ${css.link}` : css.link
          }
          to="/login"
        >
          LogIn
        </NavLink>
      </li>
    </ul>
  );
};
