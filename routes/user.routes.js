const express = require('express')
const {registerNewUser, loginUser, handleHome} = require('../controllers/user.controllers.js')
const {ckeckForAuthentication} = require('../middlewares/auth.middlewares.js')
const  {upload}  = require('../middlewares/multer.middlewares.js')

const router = express.Router()

router.route('/register')
    .post(upload.single('userImage'), registerNewUser)

router.route('/login')
    .post(loginUser)


    // secure route by Authentication
router.route("/home").get(ckeckForAuthentication, handleHome)


module.exports = router