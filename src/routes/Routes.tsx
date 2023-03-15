import { Suspense, lazy } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Layout, Preloader, RequireAuth } from '../components';
import useAuth from '../hooks/useAuth';
import { ROLES } from '../enums/roles';

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
            <Route path="landing-page" element={<LandingPage />} />

            {/* Private routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.user]} />}>
              <Route path="/portal" element={<Portal />}>
                {/* <Route element={<RequireAuth allowedRoles={[ROLES.issuer]} />}>
                  <Route
                    path="transaction-history"
                    element={<TransactionHistory />}
                  />
                </Route> */}

                {/* <Route element={<RequireAuth allowedRoles={[ROLES.broker]} />}>
                  <Route
                    path="alloment-schedule"
                    element={<AllotmentSchedule />}
                  />
                </Route> */}
              </Route>
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
