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
  const res = await axios.put(
    `http://localhost:5001/api/users/${id}`,
    newUserData
  );
  return res.data;
};

export const deleteUserData = async ({ id }) => {
  const res = await axios.delete(`http://localhost:5001/api/users/${id}`);
  return res.data;
};

// MATCH PETS SERVICES
export const sendMatchPetData = async ({ matchPetData }) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5001/api/match-pets',
      data: matchPetData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const fetchMatchPetsData = async ({ setMatchPets }) => {
  const res = await axios.get('http://localhost:5001/api/match-pets');
  setMatchPets(res.data);
};

export const fetchMatchPetData = async ({ savedData, id }) => {
  const res = await axios.get(`http://localhost:5001/api/match-pets/${id}`);
  savedData(res.data);
};

export const updateMatchPetData = async ({ matchPetData, id }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `http://localhost:5001/api/match-pets/${id}`,
      data: matchPetData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMatchPetData = async ({ id }) => {
  const res = await axios.delete(`http://localhost:5001/api/match-pets/${id}`);
  return res.data;
};

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

export const fetchLostPetsData = async ({ setLostPets }) => {
  const res = await axios.get('http://localhost:5001/api/lost-pets');
  setLostPets(res.data);
};

export const fetchLostPetData = async ({ savedData, id }) => {
  const res = await axios.get(`http://localhost:5001/api/lost-pets/${id}`);
  savedData(res.data);
};

export const updateLostPetData = async ({ lostPetData, id }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `http://localhost:5001/api/lost-pets/${id}`,
      data: lostPetData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteLostPetData = async ({ id }) => {
  const res = await axios.delete(`http://localhost:5001/api/lost-pets/${id}`);
  return res.data;
};

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

export const fetchFoundPetsData = async ({ setFoundPets }) => {
  const res = await axios.get('http://localhost:5001/api/found-pets');
  setFoundPets(res.data);
};

export const fetchFoundPetData = async ({ savedData, id }) => {
  const res = await axios.get(`http://localhost:5001/api/found-pets/${id}`);
  savedData(res.data);
};

export const updateFoundPetData = async ({ foundPetData, id }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `http://localhost:5001/api/found-pets/${id}`,
      data: foundPetData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteFoundPetData = async ({ id }) => {
  const res = await axios.delete(`http://localhost:5001/api/found-pets/${id}`);
  return res.data;
};

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

export const fetchAdoptionPetsData = async ({ setAdoptionPets }) => {
  const res = await axios.get('http://localhost:5001/api/adoption-pets');
  setAdoptionPets(res.data);
};

export const fetchAdoptionPetData = async ({ savedData, id }) => {
  const res = await axios.get(`http://localhost:5001/api/adoption-pets/${id}`);
  savedData(res.data);
};

export const updateAdoptionPetData = async ({ adoptionPetData, id }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `http://localhost:5001/api/adoption-pets/${id}`,
      data: adoptionPetData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdoptionPetData = async ({ id }) => {
  const res = await axios.delete(
    `http://localhost:5001/api/adoption-pets/${id}`
  );
  return res.data;
};
