const Joi = require('joi');

const querySchema = Joi.alternatives().try(
  Joi.object({
    "filter.specie": Joi.string(),
    "filter.breed": Joi.string(),
    "filter.age": Joi.string(),
    "filter.sex": Joi.string(),
    "filter.color": Joi.string(),
    "filter.size": Joi.string(),
    "filter.fur": Joi.string(),
    "filter.sterilized": Joi.boolean(),
    "filter.dewormed": Joi.boolean(),
    "filter.vaccinated": Joi.boolean(),
  })
);

module.exports = querySchema;