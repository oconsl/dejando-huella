const Joi = require('joi');

const bodySchema = Joi.object({
  username: Joi.string().required(),
  petName: Joi.string().required(),
  testimony: Joi.string().required(),
});

module.exports = bodySchema;