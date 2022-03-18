import { useState } from 'react';
import axios from 'axios';

const useToken = () => {
  const getToken = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setToken(getToken());
  };

  const verifyToken = async () => {
    return axios
      .post('http://localhost:5001/api/users/verify',{
        body: {
          token: token
        }
      })
      .then((response) => response.data);
  };

  return {
    setToken: saveToken,
    token,
    logOut,
    verifyToken,
  };
};

export default useToken;
