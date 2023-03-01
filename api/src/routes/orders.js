const { Router } = require('express');

// handlers
const { ordersHandler } = require('../handlers/orders');

const router = Router();

router.get('/:id', ordersHandler);

module.exports = router;

