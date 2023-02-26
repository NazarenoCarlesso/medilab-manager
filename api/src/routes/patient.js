const { Router } = require('express')
// handlers
const { patientAllHandler } = require('../handlers/patient')

const router = Router()
// routes
router.get('/', patientAllHandler)

module.exports = router