import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface Props {
  allowedRoles: string[];
}

const RequireAuth = ({ allowedRoles }: Props) => {
  const { isLoggedIn, roles } = useAuth();
  const location = useLocation();

  // If user is logged in and has the required role then load outlet, else redirect to login
  return isLoggedIn && roles.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
