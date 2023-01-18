import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/login">
              LogIn
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
