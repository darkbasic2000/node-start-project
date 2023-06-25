require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

// middleware
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')

// json
app.use(express.json())

// forms
app.use(express.urlencoded({extended: true}))

// routes
app.use(routes)

// mongodb
const dbURI = 'mongodb://127.0.0.1:27017/node-start-project'

// db connection and server start listening
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT, () => { 
        console.log(`Server running on PORT ${PORT}`) 
    }))
    .catch((err) => console.log('Cannot connect to server'))