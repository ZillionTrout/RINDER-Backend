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

const MessagePrivate = model('MessagePrivate', mpSchema);

module.exports = MessagePrivate;