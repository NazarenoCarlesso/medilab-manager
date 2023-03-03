const { Router } = require('express')
// routers import
const patientRouter = require('./patient.js')
const testRouter = require('./test.js')
const sampleRouter = require('./sample.js')
const categoryRouter = require('./category.js')
const ordersRouter = require('./orders.js')
const resultRouter = require('./result.js')

const router = Router()
// routers config
router.use('/patients', patientRouter)

router.use('/tests', testRouter)

router.use('/samples', sampleRouter)

router.use('/categories', categoryRouter)

router.use('/orders', ordersRouter)

router.use('/results', resultRouter)

// main router export
module.exports = router