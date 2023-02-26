const { Router } = require('express')
// routers import
const patientRouter = require('./patient.js')
const testRouter = require('./test.js')

const router = Router()
// routers config
router.use('/patients', patientRouter)

router.use('/tests', testRouter)
// main router export
module.exports = router