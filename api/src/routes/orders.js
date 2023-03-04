const { Router } = require('express');

const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')

// handlers
const { ordersHandler, allOrdersHandler, orderCreateHandler } = require('../handlers/orders');

const router = Router();

router.get('/', allOrdersHandler); // orders de un paciente q viene x id

router.get('/:id', ordersHandler); // orders de un paciente q viene x id

router.post('/', validateReq, validateJWT, orderCreateHandler)

module.exports = router;

