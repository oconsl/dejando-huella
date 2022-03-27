import axios from 'axios';

const getLocalToken = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return token;
};

const getLocalUsername = () => {
  const username = JSON.parse(localStorage.getItem('username'));
  return username;
};

export const requestInterceptor = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${getLocalToken()}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const responseInterceptor = () => {
  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      if (err.response.status === 401) {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/users/refresh-token`,
          {
            username: getLocalUsername(),
          }
        );

        localStorage.setItem('token', JSON.stringify(res.data));
      }
    }
  );
};
