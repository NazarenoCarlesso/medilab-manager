const { Router } = require('express');

// middlewares
const { check, header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')


// handlers
const { ordersHandler, allOrdersHandler, ordersPatientHandler } = require('../handlers/orders');

const router = Router();

router.get('/', allOrdersHandler); // todas las orders

router.get('/patient', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], ordersPatientHandler); // orders de un paciente q viene x jwt

router.get('/:id', ordersHandler); // orders de un paciente q viene x id



module.exports = router;

