const elementsRouter = require('./controllers/elements')
const config= require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger= require('./utils/logger')
require('express-async-errors')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI).then(()=>{
    logger.info('connected to MongoDB')
}).catch((error)=>{
    logger.error('error connecting to MongoDB:', error.message)
})
app.use(express.static('build'))

app.use(cors())
//app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/elements', elementsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app