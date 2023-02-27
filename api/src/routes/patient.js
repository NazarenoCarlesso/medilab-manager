const { Router } = require('express')
// handlers
const { patientAllHandler, patientLogInHandler } = require('../handlers/patient')

const router = Router()
// routes
router.get('/', patientAllHandler)

router.post('/login', patientLogInHandler)

router.post('/signup', patientSignUpHandler)

module.exports = router