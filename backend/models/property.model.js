const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    sellerID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Seller ID is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    propertyType: {
        type: String,
        required: [true, 'Property type is required'],
        enum: ['Land', 'House', 'Condo']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    brokerID: {
        type: Schema.Types.ObjectId,
        ref: 'Broker',
        required: [true, 'Broker ID is required']
    }
},{
    discriminatorKey: 'propertyType',
    timestamps: true
})

const Property = mongoose.model('Property', propertySchema)
module.exports = Property