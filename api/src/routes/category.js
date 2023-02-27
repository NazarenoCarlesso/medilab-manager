const { Router } = require('express')
// handlers
const { categoryAllHandler } = require('../handlers/category')

const router = Router()
// routes
router.get('/', categoryAllHandler)

module.exports = router