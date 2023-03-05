// models
const { models } = require('../db.js')
const { Order, Test, Payment } = models

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

const createOrder = async (uid, tests) => {
    //Genera un Payment, quizás debería venir el costo y tipo desde la variable "tests" (body)
    const newPayment = await Payment.create(/*{
      amount:
      paymentMethod:
    } */);
    
    const bulkOfOrders = tests.map((test) => {
      return {
        PatientId: uid,
        TestId: test,
        PaymentId: newPayment.dataValues.id,
      };
    });

    console.log(bulkOfOrders)
    newOrdersIds = await Order.bulkCreate(bulkOfOrders); //datos correspondientes con la orden recién generada
    return newOrdersIds.map((order)=>order.id)
  };

module.exports = { orderAll, orderById, createOrder }