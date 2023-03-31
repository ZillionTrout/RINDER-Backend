const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const campaignSchema = new Schema (
    {
        game: {
            type:String,
            enum:["Anima", "D&D"]
        },
        
    },
    {
        timestamps: true 
});

const Campaign = model('Campaign', campaignSchema);

module.exports = Campaign;