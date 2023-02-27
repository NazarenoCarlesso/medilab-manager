const { Router } = require('express')
// handlers
const { sampleAllHandler } = require('../handlers/sample')

const router = Router()
// routes
router.get('/', sampleAllHandler)

module.exports = router