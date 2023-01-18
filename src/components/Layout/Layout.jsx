import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Outlet } from 'react-router-dom';

import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header>
        <nav className={css.navigation}>
          <Navigation />
          <AuthNavigation />
        </nav>
      </header>
      <main className={css.appWrapper}>
        <Outlet />
      </main>
    </>
  );
};
