import { useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

  return { isLoggedIn, toggleAuth };
};

export default useAuth;
