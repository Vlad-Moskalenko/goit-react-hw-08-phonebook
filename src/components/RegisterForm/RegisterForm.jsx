import css from './RegisterForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from 'redux/auth/operations';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);

  const dispatch = useDispatch();

  const handleChange = e =>
    setUserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(signUp(userData));

    setUserData(INITIAL_STATE);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <label className={css.label}>
        Username
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={userData.name}
          required
        />
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
