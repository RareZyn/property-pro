const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Property = require('./property.model')

const houseSchema = new Schema({
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
    houseType: {
        type: String,
        required: [true, 'Type is required'],
        enum: ['Bungalow', 'Terrace', 'Flat']
    },
    roomNum: {
        type: Number,
        required: [true, 'Room number is requires'],
        trim: true
    },
    bathNum: {
        type: Number,
        required: [true, 'Bath number is requires'],
        trim: true
    },
    floor: {
        type: Number,
        required: [true, 'Floor number is requires'],
        trim: true
    },
    isFurnished: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['Fully Furnished', 'Partially Furnished', 'Unfurnished']
    }
}, {
    id: false
})

const House = Property.discriminator('House', houseSchema)
module.exports = House

