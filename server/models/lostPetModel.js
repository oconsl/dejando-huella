const mongoose = require('mongoose');

const { Schema } = mongoose;

const latLngSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const filterSchema = new Schema({
  specie: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  sex: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String },
  fur: { type: String, required: true },
});

const LostPet = new Schema({
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
  date: {
    type: String,
    required: true,
  },
  latLng: latLngSchema,
  filter: filterSchema,
  imageURL: { type: String },
  cloudinary: { type: String },
});

module.exports = mongoose.model('LostPet', LostPet);
