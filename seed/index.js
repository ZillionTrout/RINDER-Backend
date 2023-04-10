require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Bulletin = require('../models/Bulletin')
const Game = require('../models/Game')
// Import the model

// Place the array you want to seed

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Game.create(games);
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

