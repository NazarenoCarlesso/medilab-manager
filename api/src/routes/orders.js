const { Router } = require('express')

// middlewares
const { header, body } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')

// handlers
const { orderHandler, orderAllHandler, orderCreateHandler } = require('../handlers/orders')
const { validateAdmin } = require('../middlewares/validateDB')

// routes
const router = Router()

router.get('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], orderHandler)

router.get('/admin', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], orderAllHandler)

router.post('/', [
    body('tests', 'Tests son obligatorios').not().isEmpty(),
    validateReq,
    validateJWT
], orderCreateHandler)

module.exports = router