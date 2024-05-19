const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err))
})

router.route('/register').post((req, res) => {
    User.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.route('/login').post((req, res) => {
    const {username, password} = req.body
    User.findOne({username: username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json(user)
            }
            else{
                res.json('The password is incorrect')
            }
        }
        else{
            res.json('The account is not existed')
        }
    })
})

module.exports = router