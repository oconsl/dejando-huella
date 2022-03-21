const Joi = require('joi');

const bodySchemaLatLang = Joi.object({
  lat: Joi.number().required(),
  lang: Joi.number().required(),
});

const bodySchemaImage = Joi.object({
  name: Joi.string().required(),
  size: Joi.number().required(),
  type: Joi.string().required(),
});

const bodySchemaFilter = Joi.object({
  specie: Joi.string().required(),
  breed: Joi.string().required(),
  age: Joi.string().required(),
  sex: Joi.string().required(),
  color: Joi.string().required(),
  size: Joi.string().required(),
  fur: Joi.string().required(),
});

const bodySchema = Joi.object({
  username: Joi.string().required(),
  description: Joi.string().required(),
  phone: Joi.string().required(),
  addressNumber: Joi.string().required(),
  addressRoad: Joi.string().required(),
  date: Joi.string().required(),
  latLng: bodySchemaLatLang,
  image: bodySchemaImage,
  filter: bodySchemaFilter,
});

module.exports = bodySchema;