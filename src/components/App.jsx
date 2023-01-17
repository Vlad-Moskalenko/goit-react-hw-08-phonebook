import { Contacts } from 'pages/Contacts';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const App = () => {
  return (
    <main className="app-wrapper">
      <LoginForm />
      {/* <RegisterForm /> */}
      {/* <Contacts /> */}
    </main>
  );
};
