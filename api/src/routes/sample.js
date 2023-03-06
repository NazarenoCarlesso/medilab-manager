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
    sampleAllHandler,
    sampleCreateHandler,
    sampleWithTestsHandler
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

module.exports = router