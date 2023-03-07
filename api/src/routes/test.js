const { Router } = require('express')

// middlewares
const { param } = require('express-validator')
const validateReq = require('../middlewares/validateReq')
const { validateTest } = require('../middlewares/validateDB')

// handlers
const {
    testAllHandler,
    testDetailHandler,
    testByOrdersHandler
} = require('../handlers/test')

// routes
const router = Router()

router.get('/', testAllHandler)

router.get('/orders', testByOrdersHandler)

router.get('/:id', [
    param('id', 'Id debe ser un numero').isInt(),
    validateReq,
    param('id').custom(validateTest),
    validateReq,
], testDetailHandler)

module.exports = router