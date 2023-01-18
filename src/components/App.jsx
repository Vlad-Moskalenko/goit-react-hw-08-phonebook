import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Contacts } from 'pages/Contacts';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { Layout } from './Layout/Layout';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
