const { Router } = require('express')

// middlewares
const { header, body, param } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const {
    validateAdmin
} = require('../middlewares/validateDB')

// handlers
const {
    categoryAllHandler,
    categoryCreateHandler,
    categoryWithTestsHandler,
    categoryDeleteHandler
} = require('../handlers/category')

// routes
const router = Router()

router.get('/', categoryWithTestsHandler)

router.get('/admin', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], categoryAllHandler)

router.post('/', [
    body('name', 'Nombre es obligatorio').not().isEmpty(),
    body('name', 'Nombre debe ser menor a 25 caracteres de largo').isLength({ min: 1, max: 25 }),
    validateReq,
    validateJWT,
    validateAdmin
], categoryCreateHandler)

router.delete('/:id', [
    param('id', 'Id debe ser un numero').isInt(),
    validateReq,
    validateJWT,
    validateAdmin
], categoryDeleteHandler)

module.exports = router