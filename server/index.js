const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = process.env.PORT || 3001

const app = express()

const homeRoutes = require('./routes/weather')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(homeRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
