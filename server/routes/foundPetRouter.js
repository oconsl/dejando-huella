const express = require('express');
const foundPetController = require('../controllers/foundPetController');
const validator = require('express-joi-validation').createValidator();
const queryValidator = require('../validations/queryValidator');
const bodyValidator = require('../validations/bodyValidatorFoundPet');
const idValidator = require('../validations/idValidator');

const routes = (FoundPet) => {
  const foundPetRouter = express.Router();
  const {
    getFoundPets,
    getFoundPetById,
    postFoundPet,
    putFoundPetById,
    deleteFoundPetById,
  } = foundPetController(FoundPet);

  foundPetRouter.route('/found-pets').get(validator.query(queryValidator), getFoundPets).post(validator.body(bodyValidator), postFoundPet);

  foundPetRouter
    .route('/found-pets/:foundPetId')
    .get(validator.params(idValidator), getFoundPetById)
    .put(validator.params(idValidator), putFoundPetById)
    .delete(validator.params(idValidator), deleteFoundPetById);

  return foundPetRouter;
};

module.exports = routes;
