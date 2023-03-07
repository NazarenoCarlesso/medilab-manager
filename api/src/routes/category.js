const { Router } = require('express')
// handlers
const { categoryAllHandler } = require('../handlers/category')

// routes
const router = Router()

router.get('/', categoryAllHandler)

module.exports = router