// models
const { models } = require('../db.js')
const { Order, Test } = models

const orderAll = async () => {
    return await Order.findAll()
}

const orderById = async (uid) => {
    const orders = await Order.findAll({
        include: { model: Test, required: true },
        where: { PatientId: uid }
    })

    return orders.map(order => ({
        id: order.id,
        test: order.Test.name,
        payment: order.PaymentId
    }))
}

module.exports = { orderAll, orderById }