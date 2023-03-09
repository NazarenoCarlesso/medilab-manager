const { Router } = require('express')

// middlewares
const { param, header, body } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const { validateTest } = require('../middlewares/validateDB')
const { validateAdmin } = require('../middlewares/validateDB')

// handlers
const {
    testAllHandler,
    testDetailHandler,
    testByOrdersHandler,
    testEditHandler,
    testCreateHandler
} = require('../handlers/test')

// routes
const router = Router()

router.get('/', testAllHandler)

router.get('/orders', testByOrdersHandler)

router.get('/:id', [
    param('id', 'Id debe ser un numero').isInt(),
    validateReq,
    param('id').custom(validateTest),
    validateReq,
], testDetailHandler)

router.get('/edit/:id', [
    param('id', 'Id debe ser un numero').isInt(),
    validateReq,
    param('id').custom(validateTest),
    validateReq,
    header('token', 'Token es obligatorio').not().isEmpty(),
    body('name', 'Nombre es obligatorio').not().isEmpty(),
    body('description', 'Descripcion es obligatoria').not().isEmpty(),
    body('price', 'Precio es obligatorio').not().isEmpty(),
    body('time', 'Tiempo es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], testEditHandler)

router.post('/create', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    body('name', 'Nombre es obligatorio').not().isEmpty(),
    body('description', 'Descripcion es obligatoria').not().isEmpty(),
    body('price', 'Precio es obligatorio').not().isEmpty(),
    body('time', 'Tiempo es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], testCreateHandler)

module.exports = router