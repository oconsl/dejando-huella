const Joi = require('joi');

const idSchema = Joi.alternatives().try(
  Joi.object({
    userId: Joi.string().alphanum().min(24).max(24).required(),
  }),
  Joi.object({
    adoptionPetId: Joi.string().alphanum().min(24).max(24).required(),
  }),
  Joi.object({
    foundPetId: Joi.string().alphanum().min(24).max(24).required(),
  }),
  Joi.object({
    lostPetId: Joi.string().alphanum().min(24).max(24).required(),
  }),
  Joi.object({
    matchPetId: Joi.string().alphanum().min(24).max(24).required(),
  }),
);

module.exports = idSchema;