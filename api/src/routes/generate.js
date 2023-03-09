const { Router } = require('express')

// handlers
const {
    generateAllHandler
} = require('../handlers/generate')

// routes
const router = Router()

router.post('/', generateAllHandler)

module.exports = router