const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001

const app = express()

const homeRoutes = require('./routes/home')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(homeRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
