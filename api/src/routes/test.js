const { Router } = require('express')
// handlers
const { testAllHandler, testDetailHandler } = require('../handlers/test')

const router = Router()
// routes
router.get('/', testAllHandler)

router.get('/:id', testDetailHandler)

module.exports = router