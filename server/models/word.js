const mongoose = require('mongoose') // import mongoose

const Schema = mongoose.Schema

// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const wordSchema = new Schema({

    neno: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('Word', wordSchema) // create and export the model