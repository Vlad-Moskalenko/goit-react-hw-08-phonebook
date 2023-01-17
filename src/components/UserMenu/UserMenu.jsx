import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';

export const UserMenu = () => {
  const {
    userData: { name },
  } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {name}</p>
      <button onClick={handleClick} type="button">
        Logout
      </button>
    </div>
  );
};
