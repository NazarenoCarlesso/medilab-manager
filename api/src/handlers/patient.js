const { patientAll } = require("../controllers/patient")

const patientAllHandler = async (req, res) => {
    const patients = await patientAll()
    
    res.status(200).json(patients)
}

module.exports = { patientAllHandler }