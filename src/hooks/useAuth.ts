const useAuth = () => {
  let isLoggedIn = true;
  const roles = ['user', 'issuer'];

  return { isLoggedIn, roles };
};

export default useAuth;
