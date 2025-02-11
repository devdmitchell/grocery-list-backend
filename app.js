const express = require('express')
    const logger = require('morgan')
    const mongoose = require('mongoose')
    const cors = require('cors')
    

    const app = express()

    app.use(cors())
    app.use(logger('dev'))
    app.use(express.json())



    module.exports = app