import React, { ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ALL_ROUTES } from '../router/routes.enum';

const LinkList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const Header = styled.header`
  padding: 0 12px;
  height: 60px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainContainer = styled.main`
  padding: 20px 10px;
`;

const RsLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <NavLink to={to} style={({ isActive }) => ({ color: isActive ? '#EA5455' : '#fff' })}>
    {children}
  </NavLink>
);

const links = [
  {
    path: ALL_ROUTES.MAIN,
    label: 'Main',
  },
  {
    path: ALL_ROUTES.ABOUT_US,
    label: 'About Us',
  },
];

const MainLayout = () => (
  <Container>
    <Header>
      <nav style={{ height: '100%' }}>
        <LinkList>
          {links.map(({ path, label }) => (
            <RsLink key={path} to={path}>
              {label}
            </RsLink>
          ))}
        </LinkList>
      </nav>
    </Header>
    <MainContainer>
      <Outlet />
    </MainContainer>
  </Container>
);

export default MainLayout;
