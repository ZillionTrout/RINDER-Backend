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
    required: true
  },
  Place: {
    type: String,
    default: "Mundodisco"
  }, 
    image: {
      type: String,
      default: ""//avatar por hacer,
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