const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gameSchema = new Schema (
    {   
        name: {
            type: String,
            enum: ['Dungeons&Dragons', 'Dungeons&Dragons 2', 'Dungeons&Dragons 3', 'Dungeons&Dragons 3.5', 'Dungeons&Dragons 4', 'Dungeons&Dragons 5', 'Dungeon World', 'Anima', 'Vampiro: La mascarada', 'Vampiro: Edad Oscura', 'Changelling', 'Hombrelobo', 'Ryuutama'
            ]
        },
        campaign: {
            type: Schema.Types.ObjectId,
            ref: 'campaign'
        },
        image: {
            type: String,
            default: "" //imagen por hacer
        }
        
    },
    {
        timestamps: true 
});

const Game = model('Game', gameSchema);

module.exports = Game;