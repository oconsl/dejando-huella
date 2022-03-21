const express = require('express');
const adoptedPetController = require('../controllers/adoptedPetController');

const routes = (AdoptedPet) => {
  const adoptedPetRouter = express.Router();
  const {
    getAdoptedPets,
    postAdoptedPet,
    putAdoptedPetById,
    deleteAdoptedPetById,
  } = adoptedPetController(AdoptedPet);

  adoptedPetRouter
    .route('/adopted-pets')
    .get(getAdoptedPets)
    .post(postAdoptedPet);

  adoptedPetRouter
    .route('/adopted-pets/:adoptedPetsId')
    .put(putAdoptedPetById)
    .delete(deleteAdoptedPetById);

  return adoptedPetRouter;
};

module.exports = routes;
