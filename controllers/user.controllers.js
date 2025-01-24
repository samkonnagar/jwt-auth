const User = require('../models/user.model.js')
const { setUser } = require('../utils/auth.js')

async function registerNewUser(req, res) {
    const { first_name, last_name, email, gender, job_title, password } = req.body
    if (!first_name || !last_name || !email || !gender || !job_title || !password) {
        return res.status(400).json({ message: "All Fields are Requied" })
    }
    const file = req.file
    const result = await User.create({
        firstName: first_name,
        lastName: last_name,
        email: email,
        gender: gender,
        jobTitle: job_title,
        password: password,
        userImage: file.filename
    })

    return res.status(201).json({ message: "user created successfully, now you can login"})
}

async function loginUser(req, res) {
    const {  email, password } = req.body
    if ( !email || !password) {
        return res.status(400).json({ message: "All Fields are Requied" })
    }
    const user = await User.findOne({email})
    if (!user) {
        return res.json({message: "Invalid Email"})
    }
    if (user.password === password) {
        const createToken = setUser(user)
        res.cookie('userToken', createToken)
        return res.json({token: createToken})
    }
    return res.json({message: "Invalid Password"})
}

async function handleHome(req, res) {
    res.json({message: "Welcome to sucure route"})
}

module.exports = { registerNewUser, loginUser, handleHome}