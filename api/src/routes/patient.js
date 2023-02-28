const { Router } = require('express')

// middlewares
const validateJWT = require('../middlewares/validateJWT')

// handlers
const {
    patientAllHandler,
    patientLogInHandler,
    patientSignUpHandler,
    patientDeleteHandler
} = require('../handlers/patient')

// routes
const router = Router()

router.get('/', patientAllHandler)

router.post('/login', patientLogInHandler)

router.post('/signup', patientSignUpHandler)

router.delete('/:id', validateJWT, patientDeleteHandler)

module.exports = router