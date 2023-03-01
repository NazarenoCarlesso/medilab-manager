const { orders } = require("../controllers/orders")

const ordersHandler = async (req, res) => {
    const { id } = req.params

    const ordenes = await orders(id)

    res.status(200).json(ordenes)
}

module.exports = { ordersHandler }