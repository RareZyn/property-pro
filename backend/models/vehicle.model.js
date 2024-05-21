const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Property = require('./property.model')

const vehicleSchema = new Schema({
    vehicleType: {
        type: String,
        required: [true, 'Vehicle type is required'],
        trim: true
    },
    brand: {
        type: String,
        required: [true, 'Brand is required']
    },
    model: {
        type: String,
        required: [true, 'Moodel is required']
    },
    seats: {
        type: Number,
        required: [true, 'Seats is requires'],
        trim: true
    },
    mileage: {
        type: Number,
        required: [true, 'Mileage is requires'],
        trim: true
    },
    ManufacturedYear: {
        type: Number,
        required: [true, 'ManufacturedYear is requires'],
        trim: true
    },
    cc: {
        type: Number,
        required: [true, 'CC is requires'],
        trim: true
    },
    condition: {
        type: String,
        required: [true, 'Condition is requires'],
        trim: true,
        enum: ['New', 'Used']
    }
}, {
    id: false
})

const Vehicle = Property.discriminator('Vehicle', vehicleSchema)
module.exports = Vehicle