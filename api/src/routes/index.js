const { Router } = require('express')
// routers import
const patientRouter = require('./patient.js')
const testRouter = require('./test.js')
const sampleRouter = require('./sample.js')
const categoryRouter = require('./category.js')
const ordersRouter = require('./orders.js')
const resultRouter = require('./result.js')
const paymentsRouter = require('./payments.js')
// const doctorRouter = require('../handlers/doctor')
 const doctorRouter = require('./doctor.js')


const router = Router()
// routers config
router.use('/patients', patientRouter)

router.use('/tests', testRouter)

router.use('/samples', sampleRouter)

router.use('/categories', categoryRouter)

router.use('/orders', ordersRouter)

router.use('/results', resultRouter)

router.use('/payments', paymentsRouter)


router.use('/doctors', doctorRouter)


// router.use('/doctors', doctorRouter)


// main router export
module.exports = router