const mongoose = require('mongoose')

const Message = new mongoose.model('Message', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}))

module.exports = Message