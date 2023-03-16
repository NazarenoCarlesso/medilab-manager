const { orderAll, orderById, createOrder } = require('../controllers/orders')

const orderHandler = async (req, res) => {
    try {
        const ordenes = await orderById(req.uid)
        return res.status(200).json(ordenes)
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}

////////////////////////////////////////////////////////

//------------------>ANTES<------------------------

// const orderAllHandler = async (req, res) => {
//     const orders = await orderAll()
//     res.status(200).json(orders)
// }
////////////////////////////////////////
const orderAllHandler = async (req, res) => {
    const { page, limit } = req.query
    const orders = await orderAll(page, limit)
    res.status(200).json(orders)
}
/////////////////////////////////////

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