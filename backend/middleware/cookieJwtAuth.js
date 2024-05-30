const jwt = require('jsonwebtoken')

exports.cookieJwtAuth = (req, res, next) =>{
    const token = req.cookie.token
    try{
        const username = jwt.verify(token, process.env.MY_SECRET)
        req.username = username
        next()
    }
    catch(err){
        res.clearCookie('token')
        return res.redirect('/')
    }
}