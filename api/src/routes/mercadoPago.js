const { Router } = require("express");

//middlewares
//pendiente agregar despues de implementar

//handlers
const { mercadoPagoHandler } = require("../handlers/mercadoPago");

// routes
const router = Router();

router.post("/preference", mercadoPagoHandler);

module.exports = router;
