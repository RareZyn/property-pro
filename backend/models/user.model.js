const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long']
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    age: {
        type: Number
    },
    description: {
        type: String,
        trim: true
    },
    broker: {
        type: Boolean,
        trim: true
    },
    profilePic: {
        type: String,
        trim: true
    },
    icCard: {
        type: String,
        trim: true
    },
    renLicence: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema)

module.exports = User