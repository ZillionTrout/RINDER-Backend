require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Bulletin = require('../models/Bulletin')
// Import the model

// Place the array you want to seed
const bulletins = [
  {     
    game: "Dungeons&Dragons",
    Role: "dungeonMaster",
    Modality: "presential",
    place: "Barcelona",
    description: "Vamos a jugar juntos"
  },
  {
    game: "Dungeons&Dragons",
    Role: "dungeonMaster",
    Modality: "presential",
    place: "Madrid",
    description: "Vamos a jugar juntos en Madrid"
  }
];

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Bulletin.create(bulletins);
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

