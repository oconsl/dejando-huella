const fs = require('fs-extra');
const jwt = require('jsonwebtoken');

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const usersController = (User) => {
  // POST
  const postUser = async (req, res, next) => {
    try {
      // const result = await cloudinary.v2.uploader.upload(req.file.path);

      const { firstName, lastName, email, username, password } = req.body;

      const user = User({
        firstName,
        lastName,
        email,
        username,
        password,
      });

      await user.save();

      res.status(200).json('Signed up successfully');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  // GET
  const getUsers = async (req, res, next) => {
    const { query } = req;
    const response = await User.find(query);
    res.json(response);
  };

  // PUT
  const putUser = async (req, res, next) => {
    try {
      const { body } = req;

      const result = await cloudinary.v2.uploader.upload(req.file.path);
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        username: body.username,
        password: body.password,
        imgURL: result.url,
        public_id: result.public_id,
      });
      cloudinary.v2.uploader.destroy(updatedUser.public_id);

      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  // DELETE
  const deleteUser = async (req, res, next) => {
    try {
      const id = req.params.userId;
      const user = await User.findByIdAndDelete(id);
      cloudinary.v2.uploader.destroy(user.public_id);
      res.json('Deleted');
    } catch (err) {
      res.status(500).json("Mongo's error");
    }
  };

  // LOGIN
  const login = async (req, res) => {
    try {
      const { body } = req.body;
      const response = await User.findOne({ username: body.username });

      if (response === null || body.password !== response.password) {
        console.log('fallo');
        return res.json('Invalid credentials');
      }
      const token = generateToken(response);
      res.status(200).json(token);
    } catch (err) {
      res.json(err);
    }
  };

  const generateToken = (user) => {
    const tokenPayload = {
      username: user.username,
    };
    return jwt.sign(tokenPayload, process.env.TOKEN_SECRET, {
      expiresIn: '30m',
    });
  };

  return { postUser, getUsers, putUser, deleteUser, login, verifyToken };
};

module.exports = usersController;
