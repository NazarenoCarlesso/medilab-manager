const { Router } = require('express')

// handlers
const { sampleAllHandler } = require('../handlers/sample')

// routes
const router = Router()

router.get('/', sampleAllHandler)

module.exports = router