import { Suspense, lazy } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Layout, Preloader, RequireAuth } from '../components';
import useAuth from '../hooks/useAuth';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const Login = lazy(() => import('../pages/Login'));
const Portal = lazy(() => import('../pages/Portal'));
const RouteNotFound = lazy(() => import('../pages/RouteNotFound'));

function AppRoutes() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Preloader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <Navigate replace to={isLoggedIn ? '/portal' : '/login'} />
              }
            />

            {/* Public routes */}
            <Route path="login" element={<Login />} />
            <Route path="LandingPage" element={<LandingPage />} />

            {/* Private routes */}
            <Route element={<RequireAuth />}>
              <Route path="/portal" element={<Portal />} />
            </Route>

            {/* Catch all route */}
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AppRoutes;
