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
const {
    validateFile,
    validateImg
} = require('../middlewares/validateFiles')

// handlers
const {
    userAllHandler,
    userLogInHandler,
    userSignUpHandler,
    userGoogleHandler,
    userDetailHandler,
    userDeleteHandler,
    userWithRolesHandler,
    userChangePasswordHandler,
    userPhotoUploadHandler,
    userGeneratorHandler,
} = require('../handlers/user')

// routes
const router = Router()

router.get('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], userAllHandler)

router.get('/me', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
], userDetailHandler)

router.get('/roles', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT,
    validateAdmin
], userWithRolesHandler)

router.post('/login', [
    body('username', 'Username es obligatorio').not().isEmpty(),
    body('password', 'Contraseña es obligatoria').not().isEmpty(),
    body('username').custom(validateUsername),
    body('username').custom(validateUsernameStatus),
    validateReq
], userLogInHandler)

router.post('/changepass', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    body('password', 'Contraseña es obligatoria').not().isEmpty(),
    validateReq,
    validateJWT,
], userChangePasswordHandler)

router.post('/signup', [
    body('username', 'Username es obligatorio').not().isEmpty(),
    body('password', 'Contraseña es obligatoria').not().isEmpty(),
    body('email', 'Email es obligatorio').not().isEmpty(),
    body('firstName', 'Nombre es obligatorio').not().isEmpty(),
    body('lastName', 'Apellido es obligatorio').not().isEmpty(),
    body('email', 'Email debe ser válido').isEmail(),
    body('username', 'Username debe ser de 6 a 25 caracteres de largo').isLength({ min: 4, max: 25 }),
    body('password', 'Contraseña debe ser de 6 a 25 caracteres de largo').isLength({ min: 6, max: 25 }),
    body('firstName', 'Nombre debe ser de 2 a 25 caracteres de largo').isLength({ min: 2, max: 25 }),
    body('lastName', 'Apellido debe ser de 2 a 25 caracteres de largo').isLength({ min: 2, max: 25 }),
    body('sex', 'Sexo solo puede contener un caracter').isLength({ min: 0, max: 1 }),
    body('username').custom(validateFreeUsername),
    body('email').custom(validateFreeEmail),
    validateReq
], userSignUpHandler)

router.post('/google', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
], userGoogleHandler)

router.delete('/', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], userDeleteHandler)

router.post('/photo', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateFile,
    validateImg,
    validateJWT
], userPhotoUploadHandler)

/*
router.get('/photo', [
    header('token', 'Token es obligatorio').not().isEmpty(),
    validateReq,
    validateJWT
], userPhotoHandler)
*/

router.post('/generate', userGeneratorHandler)

module.exports = router