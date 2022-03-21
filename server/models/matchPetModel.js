const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, required: true },
});

const MatchPet = new Schema({
  username: {
    type: String,
    required: true,
  },
  petName: {
    type: String,
    required: true,
  },
  testimony: {
    type: String,
    required: true,
  },
  image: imageSchema,
});

module.exports = mongoose.model('MatchPet', MatchPet);
