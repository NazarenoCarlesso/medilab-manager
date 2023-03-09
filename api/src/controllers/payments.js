// models
const { models } = require('../db.js')
const { Payment, Order } = models

const paymentsById = async (uid) => {
    return await Payment.findAll({
        include: {
            model: Order,
            where: { PatientId: uid }
        }
    })
}

const paymentsAll = async () => {
    return await Payment.findAll()
}

module.exports = {
    paymentsById,
    paymentsAll
}