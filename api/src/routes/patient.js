const { Router } = require('express')
// handlers
const { patientAllHandler, patientLogInHandler } = require('../handlers/patient')

const router = Router()
// routes
router.get('/', patientAllHandler)

router.post('/login', patientLogInHandler)

module.exports = router