import axios from 'axios';

// GITHUB SERVICE
export const fetchGithubData = async ({ setUserData, user }) => {
  const res = await axios.get(`https://api.github.com/users/${user}`);
  setUserData({
    avatar: res.data.avatar_url,
    name: res.data.name,
    user: res.data.login,
    url: res.data.html_url,
  });
};

// USER SERVICES
export const sendUserData = async ({ userData }) => {
  const res = await axios.post(
    'http://localhost:5001/api/users/signup',
    userData
  );
  return res.data;
};

export const fetchUserData = async ({ setUserData, user }) => {
  const res = await axios.get(`http://localhost:5001/api/users/${user}`);
  setUserData({
    firstName: res.data.firstName,
    lastName: res.data.lastName,
    email: res.data.email,
    username: res.data.username,
    id: res.data._id,
  });
};

export const updateUserData = async ({ newUserData, id }) => {
  const res = await axios.put(`http://localhost:5001/api/users/${id}`, {
    ...newUserData,
  });
  return res.data;
};

export const deleteUserData = async ({ id }) => {
  const res = await axios.delete(`http://localhost:5001/api/users/${id}`);
  return res.data;
};

// MATCH PETS SERVICES
export const sendMatchPetData = async ({}) => {};

export const fetchMatchPetsData = async ({ setMatchPets }) => {
  const res = await axios.get('http://localhost:5001/api/match-pets');
  setMatchPets(res.data);
};

export const updateMatchPetData = async ({}) => {};

export const deleteMatchPetData = async ({}) => {};

// LOST PET SERVICES
export const sendLostPetData = async ({ lostPetData }) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5001/api/lost-pets',
      data: lostPetData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const fetchLostPetData = async ({}) => {};

export const updateLostPetData = async ({}) => {};

export const deleteLostPetData = async ({}) => {};

// FOUND PET SERVICES
export const sendFoundPetData = async ({ foundPetData }) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5001/api/found-pet',
      data: foundPetData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoundPetData = async ({}) => {};

export const updateFoundPetData = async ({}) => {};

export const deleteFoundPetData = async ({}) => {};

// ADOPTION PET SERVICES
export const sendAdoptionPetData = async ({ adoptionPetData }) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5001/api/adoption-pet',
      data: adoptionPetData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const fetchAdoptionPetData = async ({}) => {};

export const updateAdoptionPetData = async ({}) => {};

export const deleteAdoptionPetData = async ({}) => {};
