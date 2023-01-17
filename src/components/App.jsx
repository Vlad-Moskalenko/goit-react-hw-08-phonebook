import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Contacts } from 'pages/Contacts';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { Layout } from './Layout/Layout';
import { selectAuth } from 'redux/auth/selectors';
import { useEffect } from 'react';

export const App = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  });

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
