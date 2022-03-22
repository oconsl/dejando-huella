const express = require('express');
const adoptionPetController = require('../controllers/adoptionPetController');

const routes = (AdoptionPet) => {
  const adoptionPetRouter = express.Router();
  const {
    getAdoptionPets,
    postAdoptionPet,
    putAdoptionPetById,
    deleteAdoptionPetById,
  } = adoptionPetController(AdoptionPet);

  adoptionPetRouter
    .route('/adoption-pet')
    .get(getAdoptionPets)
    .post(postAdoptionPet);

  adoptionPetRouter
    .route('/adoption-pet/:adoptionPetId')
    .put(putAdoptionPetById)
    .delete(deleteAdoptionPetById);

  return adoptionPetRouter;
};

module.exports = routes;
