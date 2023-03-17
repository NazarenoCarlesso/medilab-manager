const { orderAll, orderById, createOrder } = require('../controllers/orders')

const orderHandler = async (req, res) => {
    const { page, limit, search } = req.query
    try {
        const ordenes = await orderById(req.uid, page, limit, search)
        return res.status(200).json(ordenes)
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}

const orderAllHandler = async (req, res) => {
    const { page, limit, search } = req.query
    const orders = await orderAll(page, limit, search)
    res.status(200).json(orders)
}

const orderCreateHandler = async (req, res) => {
    const { tests } = req.body
    try {
        const orderId = await createOrder(req.uid, tests)
        res.status(201).json({ msg: "Order created successfully", orderId });
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { orderHandler, orderAllHandler, orderCreateHandler }