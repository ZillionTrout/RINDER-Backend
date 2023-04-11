const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bulletinSchema = new Schema (
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        game: {
            type: String,
        },
        campaign: { 
            type: String
        },
        role: {
            type: String
        },
        modality: {
            type: String
        },
        place: {
            type: String
        },
        description: {
            type: String,
            maxlength: 120 //revisar más adelante
        },
    },    
    {
    timestamps: true
});

const Bulletin = model('Bulletin', bulletinSchema);

module.exports = Bulletin;