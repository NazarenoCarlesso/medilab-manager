// models
const { models } = require('../db.js')
const { Order, Test, Payment } = models
///////////////////////////////////////////////////

//--------------------> ANTES <----------------------------

// const orderAll = async () => {
//     const orders = await Order.findAll({
//         include: { model: Test, required: true }
//     })
    
//     return orders.map(order => ({
//         id: order.id,
//         test: order.Test.name,
//         payment: order.PaymentId
//     }))
// }


/////////////////////////////////////////////


const orderAll = async ( page = 0, limit = 10) => {
    const orders = await Order.findAll({
        include: { model: Test, required: true },
        limit: limit,
        offset: ((page - 1) * limit)
    })
    
    return orders.map(order => ({
        id: order.id,
        test: order.Test.name,
        payment: order.PaymentId
    }))
}

//////////////////////////////////////////////////////////////

const orderById = async (uid) => {
    const orders = await Order.findAll({
        include: { model: Test, required: true },
        where: { UserId: uid }
    })

    return orders.map(order => ({
        id: order.id,
        test: order.Test.name,
        payment: order.PaymentId
    }))
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
