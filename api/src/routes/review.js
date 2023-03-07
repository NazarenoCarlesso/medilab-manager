const { Router } = require('express')

// middlewares
const { header, body } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const {
    validateAdmin
} = require('../middlewares/validateDB')

// handlers
const {
    reviewAllHandler,
    reviewCreateHandler
} = require('../handlers/review')

// routes
const router = Router()

router.get('/', reviewAllHandler)

router.post('/', [
    body('content', 'Contenido es obligatorio').not().isEmpty(),
    body('content', 'Contenido debe ser de al menos 16 caracteres').isLength({ min: 16 }),
    validateReq,
    validateJWT,
], reviewCreateHandler)

module.exports = router