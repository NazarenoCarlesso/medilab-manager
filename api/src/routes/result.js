const { Router } = require('express')

// middlewares
const { check, header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const { validateOrder } = require('../middlewares/validateDB')

// handlers
const { resultHandler } = require('../handlers/result')

// routes
const router = Router()

router.get('/:id', [
    check('id', 'Id debe ser un numero').isInt(),
    check('id').custom(validateOrder),
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], resultHandler)

module.exports = router