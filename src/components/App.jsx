import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Contacts } from 'pages/Contacts';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { Layout } from './Layout/Layout';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginForm />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
