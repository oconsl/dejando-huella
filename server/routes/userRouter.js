const express = require('express');
const usersController = require('../controllers/userController');
const validator = require('express-joi-validation').createValidator();
const bodyValidator = require('../validations/bodyValidatorUser');
const idValidator = require('../validations/idValidator')

const routes = (User) => {
  const userRouter = express.Router();

  const { getUsers, postUser, putUser, deleteUser } = usersController(User);

  userRouter.route('/users')
    .get(getUsers)
    .post(validator.body(bodyValidator), postUser);

  userRouter.route('/users/:userId')
    .put(validator.params(idValidator), validator.body(bodyValidator), putUser)
    .delete(validator.params(idValidator), deleteUser);

  return userRouter;
};

module.exports = routes;
