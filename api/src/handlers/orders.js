const { orderAll, orderById } = require('../controllers/orders')

const orderHandler = async (req, res) => {
    try {
        const ordenes = await orderById(req.uid)
        return res.status(200).json(ordenes)
    } catch (error) {
        return res.status(400).json({ msg: error.message })  
    }
}

const orderAllHandler = async (req, res) => {
    const orders = await orderAll()
    res.status(200).json(orders)
}

module.exports = { orderHandler, orderAllHandler }