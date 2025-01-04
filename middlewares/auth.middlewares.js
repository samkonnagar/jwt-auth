
const { getUser } = require('../utils/auth.js')

function ckeckForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.userToken
    
    req.user = null
    if(!tokenCookie) return res.json({message: "Token Not Found"})

    const token = tokenCookie
    const user = getUser(token)

    if (!user) {
        return res.json({message: "Invalid Token"})
    }

    req.user = user
    return next()
}


module.exports = {
    ckeckForAuthentication
}