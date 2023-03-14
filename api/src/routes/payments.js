const { Router } = require('express');

// middlewares
const { header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const { validateAdmin } = require('../middlewares/validateDB')

// handlers
const { allPaymentsHandler, paymentsPatientHandler } = require('../handlers/payments')
const { mercadoPagoHandler } = require('../handlers/mercadoPago');

const router = Router()

router.post('/mp', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
], mercadoPagoHandler);

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