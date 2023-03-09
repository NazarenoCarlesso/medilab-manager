const { doctorAll } = require('../controllers/doctor.js')

const doctorAllHandler = async (req, res) => {
    const doctors = await doctorAll()

    res.status(200).json(doctors)
}

module.exports = {
    doctorAllHandler,
}