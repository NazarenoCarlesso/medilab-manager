const { payments, paymentsById } = require("../controllers/payments")


const paymentsPatientHandler = async (req, res) => {

    const uid = req.uid

    try {
        const pagos = await paymentsById(uid); 
        
        return res.status(200).json(pagos);
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: error.message })
        
    }

}

const allPaymentsHandler = async (req, res) => {

    try {
        const allPagos = await paymentsAll()

        res.status(200).json(allPagos)
        
    } catch (error) {

        console.log(error)
        return res.status(400).json({ msg: error.message })
        
    }

    
}

module.exports = { allPaymentsHandler, paymentsPatientHandler }