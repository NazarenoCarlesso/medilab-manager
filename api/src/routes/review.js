const { Router } = require('express')

// middlewares
const { header, body, param } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const {
    validateAdmin, validateReview
} = require('../middlewares/validateDB')

// handlers
const {
    reviewAllHandler,
    reviewCreateHandler,
    reviewDeleteHandler,
    reviewUpdateHandler
} = require('../handlers/review')

// routes
const router = Router()

router.get('/', reviewAllHandler)

router.post('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    body('content', 'Contenido es obligatorio').not().isEmpty(),
    body('content', 'Contenido debe ser de al menos 16 caracteres').isLength({ min: 16 }),
    validateReq,
    validateJWT,
], reviewCreateHandler)

router.delete('/:id', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    param('id', 'Id debe ser un uuid').isUUID(),
    validateReq,
    param('id').custom(validateReview),
    validateReq,
    validateJWT,
    validateAdmin,
], reviewDeleteHandler)

router.put('/:id', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    param('id', 'Id debe ser un uuid').isUUID(),
    body('content', 'Contenido es obligatorio').not().isEmpty(),
    body('content', 'Contenido debe ser de al menos 16 caracteres').isLength({ min: 16 }),
    validateReq,
    param('id').custom(validateReview),
    validateReq,
    validateJWT
], reviewUpdateHandler)

module.exports = router