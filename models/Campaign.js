const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const campaignSchema = new Schema (
    {
        game: {
            type: String,
            enum: ['Dungeons&Dragons', 'Dungeons&Dragons 2', 'Dungeons&Dragons 3', 'Dungeons&Dragons 3.5', 'Dungeons&Dragons 4', 'Dungeons&Dragons 5', 'Dungeon World', 'Anima', 'Vampiro: La mascarada', 'Vampiro: Edad Oscura', 'Changelling', 'Hombrelobo', 'Ryuutama'
            ]
        }
    },
    {
    timestamps: true
}
);

const Campaign = model('Campaign', campaignSchema);

module.exports = Campaign;