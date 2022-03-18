const Joi = require('joi');

const bodySchema = Joi.object({
  date: Joi.string(),
  description: Joi.string(),
  filters: Joi.object({
    age: Joi.string(),
    breed: Joi.string(),
    color: Joi.string(),
    fur: Joi.string(),
    sex: Joi.string(),
    size: Joi.string(),
  }),
  image: Joi.object(),
  location: Joi.object(),
  petName: Joi.string(),
  phone: Joi.string(),
});

module.exports = bodySchema;