const Joi = require('joi');

const namePattern = /^[a-zA-Z\s]+$/;

const bodySchema = Joi.object({
  firstName: Joi.string()
    .regex(namePattern)
    .required()
    .messages({ 'string.pattern.base': 'firstName' }),
  lastName: Joi.string()
    .regex(namePattern)
    .required()
    .messages({ 'string.pattern.base': 'lastName' }),
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string()
    .min(8)
    .max(16)
    .required()
    .messages({ 'string.max': 'password', 'string.min': 'password' }),
});

module.exports = bodySchema;
