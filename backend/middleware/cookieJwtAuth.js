const jwt = require('jsonwebtoken')

exports.cookieJwtAuth = (req, res, next) =>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try{
        const userData = jwt.verify(token, process.env.MY_SECRET)
        req.userData = userData.userData
        next()
    }
    catch(err){
        // res.clearCookie('token')
        res.status(400).json({message: 'invalid token'})
        return res.redirect('/')
    }
}