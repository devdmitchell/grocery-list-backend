const mongoose = require('mongoose')

const GrocerySchema = new mongoose.Schema({
    grocery: {
        type: String,
        required: true
    },
    purchased: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    priority: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Grocery', GrocerySchema)