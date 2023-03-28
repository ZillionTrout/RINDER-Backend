const { Schema, model } = require('mongoose');

const pointedSchema = new Pointed(
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