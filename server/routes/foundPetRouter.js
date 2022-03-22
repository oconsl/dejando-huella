const express = require('express');
const foundPetController = require('../controllers/foundPetController');

const routes = (FoundPet) => {
  const foundPetRouter = express.Router();
  const { getFoundPets, postFoundPet, putFoundPetById, deleteFoundPetById } =
    foundPetController(FoundPet);

  foundPetRouter.route('/found-pet').get(getFoundPets).post(postFoundPet);

  foundPetRouter
    .route('/found-pet/:foundPetId')
    .put(putFoundPetById)
    .delete(deleteFoundPetById);

  return foundPetRouter;
};

module.exports = routes;
