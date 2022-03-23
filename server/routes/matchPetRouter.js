const express = require('express');
const matchPetController = require('../controllers/matchPetController');

const routes = (MatchPet) => {
  const matchPetRouter = express.Router();
  const {
    getMatchPets,
    getMatchPetById,
    postMatchPet,
    putMatchPetById,
    deleteMatchPetById,
  } = matchPetController(MatchPet);

  matchPetRouter.route('/match-pets').get(getMatchPets).post(postMatchPet);

  matchPetRouter
    .route('/match-pets/:matchPetId')
    .get(getMatchPetById)
    .put(putMatchPetById)
    .delete(deleteMatchPetById);

  return matchPetRouter;
};

module.exports = routes;
