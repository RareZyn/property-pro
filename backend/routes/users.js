const router = require('express').Router()
let User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const Bcrypt = require('bcrypt')

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
                const token = jwt.sign({username: user.username}, "jwt-secret-key", {expiresIn: "1d"})
                res.cookie("token", token)
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


const verifyUser = (req, res, next) => {
    const token = req.cookies.token
    console.log(token)
    console.log('lalu')
}

router.route('/homepage').get(verifyUser, (req, res) => {
    console.log('lalu sini')
})

module.exports = router