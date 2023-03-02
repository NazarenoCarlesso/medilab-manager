const { orders } = require("../controllers/orders")

const ordersHandler = async (req, res) => {
    const { id } = req.params

    try {
        const ordenes = await orders(id);
        
        return res.status(200).json(ordenes);
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: error.message })
        
    }

}

const ordersPatientHandler = async (req, res) => {
    //const { id } = req.params

    const uid = req.uid
    console.log("uid en handler >>> ",uid);

    try {
        const ordenes = await orders(uid); 
        
        return res.status(200).json(ordenes);
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: error.message })
        
    }

}

const allOrdersHandler = async (req, res) => {
    //const { id } = req.params

    const allOrdenes = await orders()

    res.status(200).json(allOrdenes)
}

module.exports = { ordersHandler, allOrdersHandler, ordersPatientHandler }