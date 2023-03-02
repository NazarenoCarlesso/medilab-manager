const { Router } = require('express')

// middlewares
const { check, header } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')

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

router.post('/login', [
    check('username', 'Username es obligatorio').not().isEmpty(),
    check('password', 'Contraseña es obligatoria').not().isEmpty(),
    validateReq
], patientLogInHandler)

router.post('/signup', [
    check('username', 'Username es obligatorio').not().isEmpty(),
    check('password', 'Contraseña es obligatoria').not().isEmpty(),
    check('email', 'Email es obligatorio').not().isEmpty(),
    check('firstName', 'Nombre es obligatorio').not().isEmpty(),
    check('lastName', 'Apellido es obligatorio').not().isEmpty(),
    check('email', 'Email debe ser válido').isEmail(),
    check('username', 'Username debe ser de 8 a 25 caracteres de largo').isLength({ min: 8, max: 25 }),
    check('password', 'Contraseña debe ser de 8 a 25 caracteres de largo').isLength({ min: 8, max: 25 }),
    check('firstName', 'Nombre debe ser de 8 a 25 caracteres de largo').isLength({ min: 8, max: 25 }),
    check('lastName', 'Apellido debe ser de 8 a 25 caracteres de largo').isLength({ min: 8, max: 25 }),
    check('sex', 'Sexo solo puede contener un caracter').isLength({ min: 0, max: 1 }),
    validateReq
], patientSignUpHandler)

router.delete('/:id', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], patientDeleteHandler)

module.exports = router