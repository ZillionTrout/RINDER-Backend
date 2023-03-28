const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bulletinSchema = new Bulletin (
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        game: {
            type: String,
            enum: [
            //Lista de juegos
            ]
        },
        Campaign: {
            type: [Schema.Types.ObjectId],
            ref: 'Game',
            enum: [
            //Lista de campañanas según el juego
            ]
        },
        Role: {
            type: String,
            enum: ['dungeonMaster', 'player']
        },
        Modality: {
            type: [String],
            enum: ['presential', 'online']
        },
        Place: {
            type: [String]
        },
        Description: {
            type: [String],
            maxlength: 120 //revisar más adelante
        },
    },    
    {
    timestamps: true
});

module.exports = model("Bulletin", bulletinSchema);