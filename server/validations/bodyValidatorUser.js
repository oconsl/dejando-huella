const Joi = require('joi');

const bodySchema = Joi.object({
  firstName: Joi.array().items(Joi.object()).required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  userName: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = bodySchema;