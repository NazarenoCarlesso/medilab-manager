const { orders, createOrder } = require("../controllers/orders")

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

const orderCreateHandler = async(req,res)=>{
    const {tests} = req.body
    const uid = req.uid

    const newOrder = await createOrder(uid, tests)

    res.status(201).json(newOrder)
}

module.exports = { ordersHandler, allOrdersHandler, orderCreateHandler }