const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId(),
        alias: '_id'
    },
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
    description: {
        type: String,
        trim: true
    },
    properties_owned: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }],
    properties_sell: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }],
    broker: {
        type: Schema.Types.ObjectId,
        ref: 'Broker'
    },
    profilePicture: {
        type: String,
        trim: true
    }
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;