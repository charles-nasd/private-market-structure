import { Suspense, lazy } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Layout, Preloader } from '../components';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const Login = lazy(() => import('../pages/Login'));
const Portal = lazy(() => import('../pages/Portal'));
const RouteNotFound = lazy(() => import('../pages/RouteNotFound'));

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Preloader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/LandingPage" element={<LandingPage />} />

            {/* Private routes */}
            <Route path="/portal" element={<Portal />} />

            {/* Catch all route */}
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AppRoutes;
