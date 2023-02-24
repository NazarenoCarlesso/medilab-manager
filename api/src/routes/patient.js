const { Router } = require('express')
const { patientHandler } = require('../handlers/patient')

const router = Router()

router.get('/', patientHandler)

router.get('/*', (req, res) => res.send('PATIENTS ROUTE IS WORKING FINE!'))

module.exports = router