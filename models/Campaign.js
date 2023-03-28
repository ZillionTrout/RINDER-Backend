const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const campaignSchema = new Schema (
    {
        game: {
            type: Schema.Types.ObjectId,
            ref: 'game'
        },
        campaign: {
                type: String,
                enum: ['dungeonMaster', 'player'] 
            }
    },
    {
        timestamps: true 
});

const Campaign = model('Campaign', campaignSchema);

module.exports = Campaign;