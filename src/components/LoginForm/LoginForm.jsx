import css from './LoginForm.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [user, setUser] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handleChange = e => {
    setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(user));

    setUser(INITIAL_STATE);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
