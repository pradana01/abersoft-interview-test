require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes')
const errorHandler = require('./middlewares/errorHandlers')
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use(route)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`This app is listening on port: ${port}`)
})


module.exports = app