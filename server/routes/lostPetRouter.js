const express = require('express');
const lostPetController = require('../controllers/lostPetController');

const routes = (LostPet) => {
  const lostPetRouter = express.Router();
  const {
    getLostPet,
    getLostPetById,
    postLostPet,
    putLostPetById,
    deleteLostPetById,
  } = lostPetController(LostPet);

  lostPetRouter.route('/lost-pet').get(getLostPet).post(postLostPet);

  lostPetRouter
    .route('/lost-pet/:lostPetId')
    .get(getLostPetById)
    .put(putLostPetById)
    .delete(deleteLostPetById);

  return lostPetRouter;
};

module.exports = routes;
