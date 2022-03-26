const express = require('express');
const matchPetController = require('../controllers/matchPetController');
const validator = require('express-joi-validation').createValidator();
const queryValidator = require('../validations/queryValidator');
const bodyValidator = require('../validations/bodyValidatorMatchPet');
const idValidator = require('../validations/idValidator');


const routes = (MatchPet) => {
  const matchPetRouter = express.Router();
  const {
    getMatchPets,
    getMatchPetById,
    postMatchPet,
    putMatchPetById,
    deleteMatchPetById,
  } = matchPetController(MatchPet);

  matchPetRouter.route('/match-pets').get(validator.query(queryValidator), getMatchPets)
    .post(validator.body(bodyValidator), postMatchPet);

  matchPetRouter
    .route('/match-pets/:matchPetId')
    .get(validator.params(idValidator), getMatchPetById)
    .put(validator.params(idValidator), putMatchPetById)
    .delete(validator.params(idValidator), deleteMatchPetById);

  return matchPetRouter;
};

module.exports = routes;
