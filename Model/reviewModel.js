const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
})

const reviews = mongoose.model("reviews",reviewSchema)

module.exports = reviews
