import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';

import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <ul className={css.navigationList}>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.active} ${css.link}` : css.link
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.active} ${css.link}` : css.link
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};
