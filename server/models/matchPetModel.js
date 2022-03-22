const mongoose = require('mongoose');

const { Schema } = mongoose;

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
  imageURL: { type: String },
  cloudinary: { type: String },
});

module.exports = mongoose.model('MatchPet', MatchPet);
