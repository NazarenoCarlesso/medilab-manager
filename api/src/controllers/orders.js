const { Op } = require('sequelize')
// models
const { models } = require('../db.js')
const { Order, Test, Payment } = models

const orderAll = async (page = 1, limit = 10, search = '') => {
    const orders = await Order.findAndCountAll({
        include: {
            model: Test,
            where: { name: { [Op.iLike]: `%${search}%` } },
            required: true
        },
        limit: limit,
        offset: ((page - 1) * limit)
    })

    orders.rows = orders.rows.map(order => ({
        id: order.id,
        test: order.Test.name,
        payment: order.PaymentId
    }))

    return orders
}

const orderById = async (uid, page = 1, limit = 10, search = '') => {
    const orders = await Order.findAndCountAll({
        include: {
            model: Test,
            where: { name: { [Op.iLike]: `%${search}%` } },
            required: true
        },
        where: { UserId: uid },
        limit: limit,
        offset: ((page - 1) * limit)
    })

    orders.rows = orders.rows.map(order => ({
        id: order.id,
        test: order.Test.name,
        payment: order.PaymentId
    }))

    return orders
}

const createOrder = async (uid, tests) => {
    const newPayment = await Payment.create()

    const bulkOfOrders = tests.map(test => ({
        UserId: uid,
        TestId: test,
        PaymentId: newPayment.dataValues.id,
    }))
    newOrdersIds = await Order.bulkCreate(bulkOfOrders)

    return newOrdersIds.map((order) => order.id)
}

module.exports = { orderAll, orderById, createOrder }
