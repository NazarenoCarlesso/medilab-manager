const { Router } = require('express');

// handlers
const { ordersHandler, allOrdersHandler } = require('../handlers/orders');

const router = Router();

router.get('/', allOrdersHandler); // orders de un paciente q viene x id

router.get('/:id', ordersHandler); // orders de un paciente q viene x id

module.exports = router;

