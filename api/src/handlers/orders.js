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

    try {
        const newOrder = await createOrder(uid, tests)
        res.status(201).json({msg:"Orden creada"})
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    } 

    
}

module.exports = { ordersHandler, allOrdersHandler, orderCreateHandler }