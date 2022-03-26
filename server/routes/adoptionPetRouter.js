const express = require('express');
const adoptionPetController = require('../controllers/adoptionPetController');
const validator = require('express-joi-validation').createValidator();
const queryValidator = require('../validations/queryValidator');
const bodyValidator = require('../validations/bodyValidatorAdoptionPet');
const idValidator = require('../validations/idValidator');

const routes = (AdoptionPet) => {
  const adoptionPetRouter = express.Router();
  const {
    getAdoptionPets,
    getAdoptionPetById,
    postAdoptionPet,
    putAdoptionPetById,
    deleteAdoptionPetById,
  } = adoptionPetController(AdoptionPet);

  adoptionPetRouter
    .route('/adoption-pets')
    .get(validator.query(queryValidator), getAdoptionPets)
    .post(validator.body(bodyValidator), postAdoptionPet);

  adoptionPetRouter
    .route('/adoption-pets/:adoptionPetId')
    .get(validator.params(idValidator), getAdoptionPetById)
    .put(validator.params(idValidator), putAdoptionPetById)
    .delete(validator.params(idValidator), deleteAdoptionPetById);

  return adoptionPetRouter;
};

module.exports = routes;
