const {
    paymentsAll,
    paymentsById
} = require('../controllers/payments')

const paymentsPatientHandler = async (req, res) => {
    try {
        const pagos = await paymentsById(req.uid)

        res.status(200).json(pagos)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const allPaymentsHandler = async (req, res) => {
    try {
        const payments = await paymentsAll()
        res.status(200).json(payments)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    allPaymentsHandler,
    paymentsPatientHandler
}