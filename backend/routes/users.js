const router = require('express').Router()
let User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const Bcrypt = require('bcrypt')
const { cookieJwtAuth } = require('../middleware/cookieJwtAuth')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err))
})

router.post('/register', async(req, res) => {
    const salt = await Bcrypt.genSalt(10)
    const hashPassword = await Bcrypt.hash(req.body.password, salt)

    await User.create({...req.body, password:hashPassword})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.post('/login', async (req, res) => {
    const {username, password} = req.body

    await User.findOne({username: username})
    .then(user => {
        if(user){
            if(Bcrypt.compare(password, user.password)){
                const token = jwt.sign({user}, process.env.MY_SECRET, {expiresIn: "1d"})
                res.cookie("token", token)
                delete user.password
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