require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressJwt = require('express-jwt');

const User = require('./models/userModel');
const LostPet = require('./models/lostPetModel');
const FoundPet = require('./models/foundPetModel');
const AdoptedPet = require('./models/adoptedPetModel');
const MatchPet = require('./models/matchPetModel');

const deleteFiles = require('./middleware/deleteFiles');
const PORT = process.env.PORT || 8080;
const userRouter = require('./routes/userRouter')(User);
const lostPetRouter = require('./routes/lostPetRouter')(LostPet);
const foundPetRouter = require('./routes/foundPetRouter')(FoundPet);
const adoptedPetRouter = require('./routes/adoptedPetRouter')(AdoptedPet);
const matchPetRouter = require('./routes/matchPetRouter')(MatchPet);

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.log(err));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  '/api',
  userRouter,
  lostPetRouter,
  foundPetRouter,
  adoptedPetRouter,
  matchPetRouter
);

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
  }).unless({ path: ['/api/users/login', '/api/users/signup'] })
);

app.use(
  '/api',
  userRouter,
  adoptedPetRouter,
  foundPetRouter,
  lostPetRouter,
  matchPetRouter
);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
