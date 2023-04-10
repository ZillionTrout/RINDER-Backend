const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String
},
  place: {
    type: String,
    default: "Mundodisco"
  }, 
    rolling: {
      type: String,
  },
  games: {
    type: String
  },
    description: {
      type: String,
      maxlenght: 150
    }
},
  {
    timestamps: true
  });

module.exports = model("User", userSchema);