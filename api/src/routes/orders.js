const { Router } = require('express')

// middlewares
const { header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')

// handlers
const { orderHandler, orderAllHandler, orderCreateHandler} = require('../handlers/orders')

// routes
const router = Router()

router.get('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], orderHandler)

router.get('/all', orderAllHandler)

router.post('/', validateReq, validateJWT, orderCreateHandler);

module.exports = router