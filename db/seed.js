require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('stricitQuery', true);
const Bulletin = require("../models/Bulletin")

// Import data to seed
const bulletins = [
  {     
    userId: "001",
    game: "Dungeons&Dragons",
    campaign: "Descenso al Averno",
    Role: "dungeonMaster",
    Modality: "presential",
    place: "Barcelona",
    description: "Vamos a jugar juntos"
  },
  {
    userId: "002",
    game: "Dungeons&Dragons",
    campaign: "El portal bostezante",
    Role: "dungeonMaster",
    Modality: "presential",
    place: "Madrid",
    description: "Vamos a jugar juntos en Madrid"
  }
]

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    return Bulletin.deleteMany({});
  })
  .then(() => {
    return Bulletin.create(bulletins);
  })
  .then((created) => {
    console.log('holiwis')
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })