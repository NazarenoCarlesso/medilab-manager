const { Router } = require('express')
const patientRouter = require('./patient.js')

const router = Router()

router.get('/', (req, res) => res.send('THIS ROUTE IS WORKING FINE!'))

router.use('/patients', patientRouter)

module.exports = router