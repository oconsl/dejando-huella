const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  email: { type: 'string', required: true },
  username: { type: 'string', required: true },
  password: { type: 'string', required: true },
  avatar: { type: 'string', required: false },
});

module.exports = mongoose.model('User', userModel);
