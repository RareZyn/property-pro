const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Property = require('./property.model')

const LandSchema = new Schema({
    area: {
        type: Number,
        required: [true, 'Area is requires'],
        trim: true
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        trim: true
    },
    landType: {
        type: String,
        required: [true, 'Type is required'],
        enum: ['Malay Reserved Land', 'Bumiputera Lot', 'Leasehold', 'Freehold']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['Agriculture', 'Building', 'Industry']
    }
}, {
    id: false
})

const Land = Property.discriminator('Land', LandSchema)
module.exports = Land