const { patientAll } = require("../controllers/patient")

const patientHandler = async (req, res) => {
    const patients = await patientAll()
    res.status(200).json(patients)
}

module.exports = { patientHandler }