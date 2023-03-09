const { Router } = require('express')

// middlewares
const { header, body } = require('express-validator')
const validateJWT = require('../middlewares/validateJWT')
const validateReq = require('../middlewares/validateReq')
const {
    validateUsername,
    validateFreeUsername,
    validateFreeEmail,
    validateUsernameStatus,
    validateAdmin
} = require('../middlewares/validateDB')

// handlers
const {
    patientAllHandler,
    patientLogInHandler,
    patientSignUpHandler,
    patientGoogleHandler,
    patientDetailHandler,
    patientDeleteHandler,
    patientWithRolesHandler,
    patientChangePasswordHandler
} = require('../handlers/patient')

// routes
const router = Router()

router.get('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], patientAllHandler)

router.get('/me', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
], patientDetailHandler)

router.get('/roles', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], patientWithRolesHandler)

router.post('/login', [
    body('username', 'Username es obligatorio').not().isEmpty(),
    body('password', 'Contraseña es obligatoria').not().isEmpty(),
    body('username').custom(validateUsername),
    body('username').custom(validateUsernameStatus),
    validateReq
], patientLogInHandler)

router.post('/changepass', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    body('password', 'Contraseña es obligatoria').not().isEmpty(),
    validateReq,
    validateJWT,
], patientChangePasswordHandler)

router.post('/signup', [
    body('username', 'Username es obligatorio').not().isEmpty(),
    body('password', 'Contraseña es obligatoria').not().isEmpty(),
    body('email', 'Email es obligatorio').not().isEmpty(),
    body('firstName', 'Nombre es obligatorio').not().isEmpty(),
    body('lastName', 'Apellido es obligatorio').not().isEmpty(),
    body('email', 'Email debe ser válido').isEmail(),
    body('username', 'Username debe ser de 8 a 25 caracteres de largo').isLength({ min: 8, max: 25 }),
    body('password', 'Contraseña debe ser de 8 a 25 caracteres de largo').isLength({ min: 8, max: 25 }),
    body('firstName', 'Nombre debe ser de 8 a 25 caracteres de largo').isLength({ min: 8, max: 25 }),
    body('lastName', 'Apellido debe ser de 8 a 25 caracteres de largo').isLength({ min: 8, max: 25 }),
    body('sex', 'Sexo solo puede contener un caracter').isLength({ min: 0, max: 1 }),
    body('username').custom(validateFreeUsername),
    body('email').custom(validateFreeEmail),
    validateReq
], patientSignUpHandler)

router.post('/google', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
], patientGoogleHandler)

router.delete('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], patientDeleteHandler)

module.exports = router