const express = require('express');
const matchPetController = require('../controllers/matchPetController');

const routes = (MatchPet) => {
  const matchPetRouter = express.Router();
  const { getMatchPets, postMatchPet, putMatchPetById, deleteMatchPetById } =
    matchPetController(MatchPet);

  matchPetRouter.route('/match-pet').get(getMatchPets).post(postMatchPet);

  matchPetRouter
    .route('/match-pet/:matchPetId')
    .put(putMatchPetById)
    .delete(deleteMatchPetById);

  return matchPetRouter;
};

module.exports = routes;
