const express = require('express');
const lostPetController = require('../controllers/lostPetController');
const validator = require('express-joi-validation').createValidator();
const queryValidator = require('../validations/queryValidator');
const bodyValidator = require('../validations/bodyValidatorLostPet');
const idValidator = require('../validations/idValidator');

const routes = (LostPet) => {
  const lostPetRouter = express.Router();
  const {
    getLostPets,
    getLostPetById,
    postLostPet,
    putLostPetById,
    deleteLostPetById,
  } = lostPetController(LostPet);

  lostPetRouter.route('/lost-pets').get(validator.query(queryValidator), getLostPets).post(validator.body(bodyValidator), postLostPet);

  lostPetRouter
    .route('/lost-pets/:lostPetId')
    .get(validator.params(idValidator), getLostPetById)
    .put(validator.params(idValidator), putLostPetById)
    .delete(validator.params(idValidator), deleteLostPetById);

  return lostPetRouter;
};

module.exports = routes;
