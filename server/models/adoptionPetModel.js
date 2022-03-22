const mongoose = require('mongoose');

const { Schema } = mongoose;

const latLngSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const imageSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, required: true },
});

const filterSchema = new Schema({
  specie: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  sex: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  fur: { type: String, required: true },
  castrated: { type: Boolean, required: true },
  dewormed: { type: Boolean, required: true },
  vaccinated: { type: Boolean, required: true },
});

const AdoptionPet = new Schema({
  username: {
    type: String,
    required: true,
  },
  petName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  addressNumber: {
    type: String,
    required: true,
  },
  addressRoad: {
    type: String,
    required: true,
  },
  latLng: latLngSchema,
  image: imageSchema,
  date: {
    type: String,
    required: true,
  },
  filter: filterSchema,
});

module.exports = mongoose.model('AdoptionPet', AdoptionPet);
