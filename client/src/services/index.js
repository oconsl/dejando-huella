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

export const fetchMatchPetsData = ({ setMatchPets }) => {
  return axios.get('http://localhost:5001/api/match-pets').then((res) => {
    setMatchPets(res.data);
  });
};

export const sendLostPetData = ({ lostPetData }) => {
  return axios({
    method: 'post',
    url: 'http://localhost:5001/api/lost-pets',
    data: lostPetData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
};

export const sendFoundPetData = ({ foundPetData }) => {
  return axios({
    method: 'post',
    url: 'http://localhost:5001/api/found-pet',
    data: foundPetData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
};

export const sendAdoptionPetData = ({ adoptionPetData }) => {
  return axios({
    method: 'post',
    url: 'http://localhost:5001/api/adoption-pet',
    data: adoptionPetData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
};
