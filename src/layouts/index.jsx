import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, useLocation, Navigate, Routes } from 'react-router-dom';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';
import publicRoutes from '../routes/publicRoutes';
import privateRoutes from '../routes/privateRoutes';
import AdminLayout from '../Auth/components/layout/Layout';
import NotFoundPage from '../pages/404Page/404Page';

function AppLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.toLowerCase().includes('system');
  const currentUser = useSelector(state => state.auth.currentUser);
  const [user, setLoginUser] = useState(currentUser);

  useEffect(() => {
    setLoginUser(currentUser);
  }, [currentUser]);

  return (
    <Routes>
      {isAdminRoute ? (
        (
          <Route element={<AdminLayout location={location} />}>
            {Object.values(privateRoutes).map(({ path, component: Component, requiredLogin }) => (
              <Route
                key={path}
                path={path}
                element={requiredLogin ? (user && user.role_Name === "Admin" ? <Component /> : <Navigate to="404" />) : <Navigate to="/login" />}
              />
            ))}
          </Route>
        )
      ) : (
        <>
          <Route element={<PublicLayout />}>
            {Object.values(publicRoutes).map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>

          <Route element={<PrivateLayout />}>
            {Object.values(privateRoutes).map(({ path, component: Component, requiredLogin }) => (
              <Route
                key={path}
                path={path}
                element={requiredLogin ? <Component /> : <Navigate to="/login" />}
              />
            ))}
          </Route>
        </>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppLayout;
