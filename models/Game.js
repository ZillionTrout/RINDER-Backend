const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gameSchema = new Schema (
    {
        game: {
            type: Schema.Types.ObjectId,
            ref: 'game'
        },
        
    },
    {
        timestamps: true 
});

const Game = model('Game', gameSchema);

module.exports = Game;