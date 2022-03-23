const express = require('express');
const adoptionPetController = require('../controllers/adoptionPetController');

const routes = (AdoptionPet) => {
  const adoptionPetRouter = express.Router();
  const {
    getAdoptionPet,
    getAdoptionPetById,
    postAdoptionPet,
    putAdoptionPetById,
    deleteAdoptionPetById,
  } = adoptionPetController(AdoptionPet);

  adoptionPetRouter
    .route('/adoption-pet')
    .get(getAdoptionPet)
    .post(postAdoptionPet);

  adoptionPetRouter
    .route('/adoption-pet/:adoptionPetId')
    .get(getAdoptionPetById)
    .put(putAdoptionPetById)
    .delete(deleteAdoptionPetById);

  return adoptionPetRouter;
};

module.exports = routes;
