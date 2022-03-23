const express = require('express');
const foundPetController = require('../controllers/foundPetController');

const routes = (FoundPet) => {
  const foundPetRouter = express.Router();
  const {
    getFoundPets,
    getFoundPetById,
    postFoundPet,
    putFoundPetById,
    deleteFoundPetById,
  } = foundPetController(FoundPet);

  foundPetRouter.route('/found-pets').get(getFoundPets).post(postFoundPet);

  foundPetRouter
    .route('/found-pets/:foundPetId')
    .get(getFoundPetById)
    .put(putFoundPetById)
    .delete(deleteFoundPetById);

  return foundPetRouter;
};

module.exports = routes;
