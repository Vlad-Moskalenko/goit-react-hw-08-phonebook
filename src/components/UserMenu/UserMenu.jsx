import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const {
    userData: { email },
  } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {email}</p>
      <button onClick={handleClick} type="button">
        Logout
      </button>
    </div>
  );
};
