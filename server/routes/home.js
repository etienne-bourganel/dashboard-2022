const express = require('express')

const router = express.Router()

const homeController = require('../controllers/home')

router.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

router.get('/test', (req, res) => {
  res.json({ message: 'I am the test-endpoint' })
})

router.get('/display', homeController.getDisplay)

module.exports = router
