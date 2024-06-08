const router = require('express').Router()
let User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const Bcrypt = require('bcrypt')
const {cookieJwtAuth} = require('../middleware/cookieJwtAuth')
const { addUser } = require('../controller/userController')

router.post("/addUser", addUser);



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
                const username = user.username;
                const id = user._id;
                const token = jwt.sign({id, username}, process.env.MY_SECRET, { expiresIn: "1d" })
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
    res.json({"isAuthenticated": true})
})


router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const {name, ...data} = req.body;

    try {
        const user = await User.findByIdAndUpdate({_id:id}, data, { new: true });

        if (user) {
            const token = jwt.sign({ user }, process.env.MY_SECRET, { expiresIn: "1d" });
            res.cookie("token", token);
            res.json(user)
        } else {
            res.status(404).json('User not found');
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json('Internal server error');
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { password, ...data } = user.toObject();
        res.json(data);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

router.get('/get/property-selled/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user.properties_sell);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router