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
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username });
        if (user) {
            const isMatch = await Bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign({ user }, process.env.MY_SECRET, { expiresIn: "1d" });
                res.cookie("token", token);
                const userWithoutPassword = { ...user._doc }; // Spread operator to copy the user object
                delete userWithoutPassword.password;
                res.json(userWithoutPassword);
            } else {
                res.json('The password is incorrect');
            }
        } else {
            res.json('The account does not exist');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json('Internal server error');
    }
});

module.exports = router