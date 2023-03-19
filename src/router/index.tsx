import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutUsPage, MainPage, NotFoundPage } from '../pages';
import { MainLayout } from '../layouts';

export enum ROUTES {
  ROOT = '/',
  MAIN = 'main',
  ABOUT_US = '',
  NOT_FOUND = '404',
}

export const MainRouterConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.ROOT} element={<MainLayout />}>
        <Route index element={<Navigate replace to={ROUTES.MAIN} />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />

      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
    </Routes>
  </BrowserRouter>
);
