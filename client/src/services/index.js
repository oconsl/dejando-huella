import axios from 'axios';

export const fetchGithubData = ({ setUserData, user }) => {
  axios.get(`https://api.github.com/users/${user}`).then((res) => {
    setUserData({
      avatar: res.data.avatar_url,
      name: res.data.name,
      user: res.data.login,
      url: res.data.html_url,
    });
  });
};
