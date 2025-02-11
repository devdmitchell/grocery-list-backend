const express = require('express')
    const logger = require('morgan')
    const mongoose = require('mongoose')
    const cors = require('cors')
    const grocerListRouter = require('./routes/GroceryList/groceryListRouter')

    const app = express()

    app.use(cors())
    app.use(logger('dev'))
    app.use(express.json())
    app.use('/api/grocery', grocerListRouter)



    module.exports = app