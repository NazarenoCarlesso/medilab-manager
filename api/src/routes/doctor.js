const { Router } = require('express')

// middlewares
const { header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')

// handlers
const { doctorAllHandler } = require('../handlers/doctor')

// routes
const router = Router()

router.get('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
], doctorAllHandler)

module.exports = router