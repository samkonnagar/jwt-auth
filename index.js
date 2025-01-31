const express = require('express')
const userRouter = require('./routes/user.routes.js')
const { connectWithMongoDB } = require('./db/db.connect.js')
const cookieParser = require('cookie-parser')
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8000
const app = express()
connectWithMongoDB(process.env.MONGODB_URL);


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
app.listen(PORT, () => {
    console.log(`Server started on: http://localhost:${PORT} Successfully`);
})