const { Schema, model } = require('mongoose');

const pointedSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        bulletin: {
            type: Schema.Types.ObjectId,
            ref: 'Bulletin'
        },
    },
    {
        timestamps: true
    });

module.exports = model("Pointed", pointedSchema);