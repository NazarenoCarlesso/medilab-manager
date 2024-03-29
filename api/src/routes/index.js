const { Router } = require('express')
// routers import
const userRouter = require('./user.js')
const testRouter = require('./test.js')
const sampleRouter = require('./sample.js')
const categoryRouter = require('./category.js')
const ordersRouter = require('./orders.js')
const resultRouter = require('./result.js')
const paymentsRouter = require('./payments.js')
const reviewRouter = require('./review.js')
const doctorRouter = require('./doctor.js')
const generateRouter = require('./generate.js')
const mercadoPagoRouter = require('./mercadoPago.js')
const verifyRouter = require('./verify.js');
const openaiRouter = require('./openai.js');

const router = Router()
// routers config
router.use('/users', userRouter)

router.use('/tests', testRouter)

router.use('/samples', sampleRouter)

router.use('/categories', categoryRouter)

router.use('/orders', ordersRouter)

router.use('/results', resultRouter)

router.use('/payments', paymentsRouter)

router.use('/reviews', reviewRouter)

router.use('/doctors', doctorRouter)

router.use('/generate', generateRouter)

router.use('/mercadopago', mercadoPagoRouter)

router.use('/verify', verifyRouter)

router.use('/openai', openaiRouter)

// main router export
module.exports = router