const { patientAll, patientLogIn } = require("../controllers/patient")

const patientAllHandler = async (req, res) => {
    const patients = await patientAll()

    res.status(200).json(patients)
}

const patientLogInHandler = async (req, res) => {
    const { username, password } = req.body

    const patient = await patientLogIn(username, password)

    res.status(200).json(patient)
}

module.exports = { patientAllHandler, patientLogInHandler }