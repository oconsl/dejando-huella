const Joi = require('joi');

const bodySchemaImage = Joi.object({
  name: Joi.string().required(),
  size: Joi.number().required(),
  type: Joi.string().required(),
});

const bodySchema = Joi.object({
  name: Joi.string().required(),
  petName: Joi.string().required(),
  testimony: Joi.string().required(),
  image: bodySchemaImage,
});

module.exports = bodySchema;