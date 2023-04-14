const { Schema, model } = require('mongoose');

const pointedSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String
        },
        bulletinId: {
            type: Schema.Types.ObjectId,
            ref: 'Bulletin'
        },
    },
    {
        timestamps: true
    });

module.exports = model("Pointed", pointedSchema);