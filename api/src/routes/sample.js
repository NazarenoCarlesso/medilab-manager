const { Router } = require('express')

// middlewares
const { header, body, param } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const {
    validateAdmin,
    validateSample
} = require('../middlewares/validateDB')

// handlers
const {
    sampleAllHandler,
    sampleCreateHandler,
    sampleWithTestsHandler,
    sampleDeleteHandler,
    sampleUpdateHandler
} = require('../handlers/sample')

// routes
const router = Router()

router.get('/', sampleWithTestsHandler)

router.get('/admin', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], sampleAllHandler)

router.post('/', [
    body('name', 'Nombre es obligatorio').not().isEmpty(),
    body('name', 'Nombre debe ser menor a 25 caracteres de largo').isLength({ min: 1, max: 25 }),
    validateReq,
    validateJWT,
    validateAdmin
], sampleCreateHandler)

router.delete('/:id/:newId', [
    param('id', 'Id debe ser un uuid').isUUID(),
    param('newId', 'Id debe ser un uuid').isUUID(),
    validateReq,
    param('id').custom(validateSample),
    param('newId').custom(validateSample),
    validateReq,
    validateJWT,
    validateAdmin
], sampleDeleteHandler)

router.put('/:id', [
    param('id', 'Id debe ser un uuid').isUUID(),
    body('name', 'Nombre es obligatorio').not().isEmpty(),
    body('name', 'Nombre debe ser menor a 25 caracteres de largo').isLength({ min: 1, max: 25 }),
    validateReq,
    param('id').custom(validateSample),
    validateReq,
    validateJWT,
    validateAdmin
], sampleUpdateHandler)

module.exports = router