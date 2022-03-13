const express = require('express');
const usersController = require('../controllers/userController');

const routes = (User) => {
  const userRouter = express.Router();

  const { getUsers, postUser, putUser, deleteUser } = usersController(User);

  userRouter.route('/users')
    .get(getUsers)
    .post(postUser);

  userRouter.route('/users/:userId')
    .put(putUser)
    .delete(deleteUser);

  return userRouter;
};

module.exports = routes;
