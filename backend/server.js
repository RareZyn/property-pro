const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const app  = express()
const port = process.env.port || 5000

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

const uri = process.env.ATLAS_URI
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

const usersRouter = require('./routes/users')
const propertyRouter = require('./routes/property')
const forumRouter = require('./routes/forums')

app.use('/users', usersRouter)
app.use('/property', propertyRouter)
app.use('/forum', forumRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})