const { Router } = require('express');

// middlewares
const { header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const { validateAdmin } = require('../middlewares/validateDB')

// handlers
const { allPaymentsHandler, paymentsPatientHandler } = require('../handlers/payments')

const router = Router()

router.get('/admin', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], allPaymentsHandler)

router.get('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], paymentsPatientHandler)

module.exports = router