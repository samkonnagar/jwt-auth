const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, `IMG-${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

module.exports = {
    upload
}