require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/userModel');
const LostPet = require('./models/lostPetModel');
const FoundPet = require('./models/foundPetModel');
const AdoptedPet = require('./models/adoptedPetModel');
const MatchPet = require('./models/matchPetModel');
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

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
