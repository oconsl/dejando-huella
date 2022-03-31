import { useState, useEffect } from 'react';
// ROUTER
import { Outlet } from 'react-router-dom';
// COMPONENTS
import Login from '../Login/Login';
import HeaderPet from '../HeaderPet/HeaderPet';
// HOOKS
import useToken from '../../hooks/useToken';
import useAutoLogout from '../../hooks/useAutoLogout';

const ProtectedRoutes = () => {
  const timer = useAutoLogout(600);
  const { token, setToken } = useToken();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(token && timer > 0);
  }, [token, timer]);

  return isAuth ? (
    <>
      <HeaderPet />
      <Outlet />
    </>
  ) : (
    <Login setToken={setToken} />
  );
};

export default ProtectedRoutes;
