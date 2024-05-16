const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phoneNumber;

    const newUser = new User({
        username,
        firstname,
        lastname,
        email,
        password,
        phone
    })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' +err))
})

module.exports = router