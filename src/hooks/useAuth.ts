import { useState } from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    roles: ['user', 'issuer'],
  });

  const loginUser = () => setAuth({ ...auth, isLoggedIn: true });
  const logoutUser = () => setAuth({ ...auth, isLoggedIn: false });

  return { auth, loginUser, logoutUser };
};

export default useAuth;
