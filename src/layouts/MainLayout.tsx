import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <>
    <header>Some Header</header>
    <main>
      <Outlet />
    </main>
    <footer>Some footer</footer>
  </>
);

export default MainLayout;
