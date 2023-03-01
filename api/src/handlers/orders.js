const { orders } = require("../controllers/orders")

const ordersHandler = async (req, res) => {
    const { id } = req.params

    const ordenes = await orders(id)

    res.status(200).json(ordenes)
}

const allOrdersHandler = async (req, res) => {
    const { id } = req.params

    const allOrdenes = await orders(id)

    res.status(200).json(allOrdenes)
}

module.exports = { ordersHandler, allOrdersHandler }