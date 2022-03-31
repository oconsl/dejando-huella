// ENVIRONMENT VARIABLES
require('dotenv').config();
// SERVER DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// DB DEPENDENCIES
const mongoose = require('mongoose');
// DB MODELS
const User = require('./models/userModel');
const LostPet = require('./models/lostPetModel');
const FoundPet = require('./models/foundPetModel');
const AdoptionPet = require('./models/adoptionPetModel');
const MatchPet = require('./models/matchPetModel');
// MIDDLEWARE REQUIRE
const deleteFiles = require('./middleware/deleteFiles');
const expressJwt = require('express-jwt');
const multer = require('multer');
// ROUTERS
const userRouter = require('./routes/userRouter')(User);
const lostPetRouter = require('./routes/lostPetRouter')(LostPet);
const foundPetRouter = require('./routes/foundPetRouter')(FoundPet);
const adoptionPetRouter = require('./routes/adoptionPetRouter')(AdoptionPet);
const matchPetRouter = require('./routes/matchPetRouter')(MatchPet);
// CONFIGURATIONS
const PORT = process.env.PORT || 8080;
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'storage/imgs'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

// DB CONNECTION
mongoose
  .connect(process.env.MONGODB_URI)
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.log(err));

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(deleteFiles);
app.use(multer({ storage: storage }).single('image'));
app.all(
  '/api/*',
  expressJwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ['HS256'],
  }).unless({
    path: ['/api/users/login', '/api/users/signup', '/api/users/refresh-token'],
  })
);

// ROUTES
app.use(
  '/api',
  userRouter,
  lostPetRouter,
  foundPetRouter,
  adoptionPetRouter,
  matchPetRouter
);

// PORT EXPOSED
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
