const express = require('express')
const userRouter = require('./routes/user.routes.js')
const { connectWithMongoDB } = require('./db/db.connect.js')
const cookieParser = require('cookie-parser')
const path = require('path');

const port = 4000
const app = express()
const URL = "mongodb://127.0.0.1:27017/user-manager"
connectWithMongoDB(URL);


// Routes
app.get('/', (req, res) => {
    return res.status(200).send('Welcome to jwt-auth')
})


// Middleware - 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'images')));


// User routes
app.use('/api', userRouter)


// Server
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port} Successfully`);
})