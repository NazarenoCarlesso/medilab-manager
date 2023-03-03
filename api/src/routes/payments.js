const { Router } = require('express');

// middlewares
const { check, header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')


// handlers
const { allPaymentsHandler, paymentsPatientHandler } = require('../handlers/payments');

const router = Router();

router.get('/', allPaymentsHandler); // todas las payments

router.get('/patient', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], paymentsPatientHandler); // payments de un paciente q viene x jwt


module.exports = router;