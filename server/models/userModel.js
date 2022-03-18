const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  firstName:{type: 'string', required: true},
  lastName:{type: 'string', required: true},
  email:{type: 'string', required: true},
  username:{type: 'string', required: true},
  password:{type: 'string', required: true},
  imgURL: {type: 'string'},
  public_id: {type: 'string'},
});

<<<<<<< HEAD
userModel.methods.setImgUrl = function setImgUrl (filename) {
  // this.imgURL = `http://localhost:${process.env.PORT}/public/${filename}`;
  return `http://localhost:${process.env.PORT}/public/${filename}`;
  // console.log('hi');
}

module.exports = mongoose.model('User', userModel);
=======
module.exports = mongoose.model('User', userModel);
>>>>>>> 84466b996e8836f2e8e0c1583ee308464d93aa74
