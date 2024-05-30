const router = require('express').Router()
let User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const Bcrypt = require('bcrypt')
const {cookieJwtAuth} = require('../middleware/cookieJwtAuth')
const { findUser } = require('../controller/userController')

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
                const {password, ...userData} = user.toObject()
                const token = jwt.sign({ userData }, process.env.MY_SECRET, { expiresIn: "1d" })
                res.cookie("token", token);
                res.json(jwt.decode(token));
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

router.get('/auth', cookieJwtAuth, async (req, res) => {
    // res.status(200).json({ message: 'This is a protected route.' })
    res.json({"isAuthenticated": true})
})

router.get("/findUsername",findUser);

// router.put('/update/:id', async (req, res) => {
//     const { id } = req.params.id;
//     const { password, ...updateData } = req.body;

//     try {
//         if (password) {
//             const salt = await Bcrypt.genSalt(10);
//             updateFields.password = await Bcrypt.hash(password, salt);
//         }

//         const user = await User.findByIdAndUpdate({_id:id}, updateData, { new: true });

//         if (user) {
//             const userWithoutPassword = { ...user._doc };
//             delete userWithoutPassword.password;
//             res.json(userWithoutPassword);
//             const token = jwt.sign({ user }, process.env.MY_SECRET, { expiresIn: "1d" });
//             res.cookie("token", token);
//         } else {
//             res.status(404).json('User not found');
//         }
//     } catch (error) {
//         console.error('Error updating user:', error);
//         res.status(500).json('Internal server error');
//     }
// });

router.put('/get/:id', async (req, res) => {
    const {id} = req.params
    // const {password, ...data} = req.body
    const user = await User.findById(id)

    const {password, ...data} = user.toObject()
    res.json(data)

    // res.json(await User.findByIdAndUpdate(id, data, {new: true}))
});

module.exports = router