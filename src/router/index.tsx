import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutUsPage, MainPage, NotFoundPage } from '../pages';
import { MainLayout } from '../layouts';
import { ALL_ROUTES } from './routes.enum';

export const MainRouterConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ALL_ROUTES.ROOT} element={<MainLayout />}>
        <Route index element={<Navigate replace to={ALL_ROUTES.MAIN} />} />
        <Route path={ALL_ROUTES.MAIN} element={<MainPage />} />
        <Route path={ALL_ROUTES.ABOUT_US} element={<AboutUsPage />} />
      </Route>
      <Route path={ALL_ROUTES.NOT_FOUND} element={<NotFoundPage />} />

      <Route path="*" element={<Navigate to={ALL_ROUTES.NOT_FOUND} />} />
    </Routes>
  </BrowserRouter>
);
