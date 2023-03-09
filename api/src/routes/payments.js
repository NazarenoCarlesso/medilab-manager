const { Router } = require('express');

// middlewares
const { header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')

// handlers
const { allPaymentsHandler, paymentsPatientHandler } = require('../handlers/payments')

const router = Router()

router.get('/', allPaymentsHandler)

router.get('/patient', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], paymentsPatientHandler)

module.exports = router