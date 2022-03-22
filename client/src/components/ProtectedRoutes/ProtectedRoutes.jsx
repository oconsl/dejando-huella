import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'; 
import Login from '../Login/Login';
import useToken from '../../Hooks/useToken';
import useAutoLogout from '../../Hooks/useAutoLogout';

const ProtectedRoutes = () => {
  const timer = useAutoLogout(300);
  const { token, setToken } = useToken();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(token && timer > 0);
  }, [timer, token]);
  
  return isAuth ? <Outlet/> : <Login setToken={setToken}/>;
}

export default ProtectedRoutes