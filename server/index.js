require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/userModel');
const PORT = process.env.PORT || 8080;


const userRouter = require('./routes/userRouter')(User);

const app = express();


mongoose.connect(process.env.MONGODB_URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', userRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));