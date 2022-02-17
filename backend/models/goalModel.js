const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // as per module.exports in the userModel.js file
    },
    text: {
        type: String,
        required: [true, 'Please add a textvalue']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)