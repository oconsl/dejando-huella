import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useToken = () => {
  const navigate = useNavigate();

  const getToken = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token, username) => {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('username', JSON.stringify(username));
    setToken(token);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken(getToken());
    navigate('/');
  };

  return {
    setToken: saveToken,
    token,
    logOut,
  };
};

export default useToken;
