const express = require('express')
const {registerNewUser, loginUser, handleHome} = require('../controllers/user.controllers.js')
const {ckeckForAuthentication} = require('../middlewares/auth.middlewares.js')

const router = express.Router()

router.route('/register')
    .post(registerNewUser)

router.route('/login')
    .post(loginUser)

router.route("/home").get(ckeckForAuthentication, handleHome)


module.exports = router