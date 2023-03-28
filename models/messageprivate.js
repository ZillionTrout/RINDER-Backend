const { Schema, model } = require('mongoose');

const mpSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        otherUserId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        comment: {
            type: String
        }, 
        isChecked: {
            type: Boolean
        }
    },
    {
        timestamps: true
    });

module.exports = model("messagePrivate", mpSchema);