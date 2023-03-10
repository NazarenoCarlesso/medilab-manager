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
    testCreateHandler,
    testUpdateHandler,
    testDeleteHandler
} = require('../handlers/test')

// routes
const router = Router()

router.get('/', testAllHandler)

router.get('/orders', testByOrdersHandler)

router.get('/:id', [
    param('id', 'Id debe ser un uuid').isUUID(),
    validateReq,
    param('id').custom(validateTest),
    validateReq,
], testDetailHandler)

router.post('/create', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    body('name', 'Nombre es obligatorio').not().isEmpty(),
    body('description', 'Descripcion es obligatoria').not().isEmpty(),
    body('price', 'Precio es obligatorio').not().isEmpty(),
    body('time', 'Tiempo es obligatorio').not().isEmpty(),
    body('category', 'Categoria es obligatorio').not().isEmpty(),
    body('sample', 'Muestra es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], testCreateHandler)

router.delete('/:id', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    param('id', 'Id debe ser un uuid').isUUID(),
    validateReq,
    param('id').custom(validateTest),
    validateReq,
    validateReq,
    validateJWT,
    validateAdmin
], testDeleteHandler)

router.put('/:id', [
    param('id', 'Id debe ser un uuid').isUUID(),
    validateReq,
    param('id').custom(validateTest),
    validateReq,
    header('token', 'Token es obligatorio').not().isEmpty(),
    body('name', 'Nombre es obligatorio').not().isEmpty(),
    body('description', 'Descripcion es obligatoria').not().isEmpty(),
    body('price', 'Precio es obligatorio').not().isEmpty(),
    body('time', 'Tiempo es obligatorio').not().isEmpty(),
    body('category', 'Categoria es obligatorio').not().isEmpty(),
    body('sample', 'Muestra es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], testUpdateHandler)

module.exports = router