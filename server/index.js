require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressJwt = require('express-jwt');
const User = require('./models/userModel');
const deleteFiles = require('./middleware/deleteFiles');
const PORT = process.env.PORT || 8080;
const userRouter = require('./routes/userRouter')(User);

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.log(err));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'storage/imgs'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
app.use(deleteFiles);
app.use(multer({ storage: storage }).single('image'));

app.all(
  '/api/*',
  expressJwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ['HS256'],
  }).unless({ path: ['/api/users/login', '/api/users/verify'] })
);

app.use('/api', userRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
