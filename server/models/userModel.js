const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  email: { type: 'string', unique: true, required: true },
  username: { type: 'string', unique: true, required: true },
  password: { type: 'string', required: true },
});

module.exports = mongoose.model('User', userModel);
