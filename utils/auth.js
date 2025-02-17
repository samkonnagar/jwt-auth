const jwt = require('jsonwebtoken')
const secretKey = '45@asds$dsfsdf2r4wdf3@%@RF#$$@#Re67fsdf54sd54s5a4'

function setUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        jobTitle: user.jobTitle
    }
    return jwt.sign(payload, secretKey)
}

function getUser(token) {
    if(!token) return null
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        return null
    }
}

module.exports = {
    setUser,
    getUser
}