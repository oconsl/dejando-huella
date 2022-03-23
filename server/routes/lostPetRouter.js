const express = require('express');
const lostPetController = require('../controllers/lostPetController');

const routes = (LostPet) => {
  const lostPetRouter = express.Router();
  const { getLostPets, postLostPet, putLostPetById, deleteLostPetById } =
    lostPetController(LostPet);

  lostPetRouter.route('/lost-pets').get(getLostPets).post(postLostPet);

  lostPetRouter
    .route('/lost-pets/:lostPetId')
    .put(putLostPetById)
    .delete(deleteLostPetById);

  return lostPetRouter;
};

module.exports = routes;
