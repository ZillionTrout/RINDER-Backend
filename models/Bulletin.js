const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bulletinSchema = new Schema (
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String
        },
        image: {
            type: String
        },
        game: {
            type: String,
            enum: ['Dungeons&Dragons', 'Vampiro', 'Hombrelobo', 'Changeling', 'Pathfinder', 'Custom']
        },
        campaign: { 
            type: String
        },
        role: {
            type: String,
            enum: ['Master', 'Player']
        },
        modality: {
            type: String,
            enum: ['Presencial', 'Online']
        },
        place: {
            type: String
        },
        description: {
            type: String,
            maxlength: 200
        },
    },    
    {
    timestamps: true
});

const Bulletin = model('Bulletin', bulletinSchema);

module.exports = Bulletin;