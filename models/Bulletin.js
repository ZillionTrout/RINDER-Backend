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
            enum: ['Dungeons&Dragons', 'Dungeons&Dragons 2', 'Dungeons&Dragons 3', 'Dungeons&Dragons 3.5', 'Dungeons&Dragons 4', 'Dungeons&Dragons 5', 'Dungeon World', 'Anima', 'Vampiro: La mascarada', 'Vampiro: Edad Oscura', 'Changelling', 'Hombrelobo', 'Ryuutama'
            ]
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
            type: [String],
            maxlength: 120 //revisar más adelante
        },
    },    
    {
    timestamps: true
});

const Bulletin = model('Bulletin', bulletinSchema);

module.exports = Bulletin;