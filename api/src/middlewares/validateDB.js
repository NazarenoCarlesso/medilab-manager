const { models } = require('../db.js')
const { Order } = models

const validateOrder = async (id) => {
    const order = await Order.findByPk(id)

    if (!order) throw new Error('Orden no es válida')
}

module.exports = { validateOrder }