const { patientAll, patientLogIn, patientSignUp } = require("../controllers/patient")

const patientAllHandler = async (req, res) => {
    const patients = await patientAll()

    res.status(200).json(patients)
}

const patientLogInHandler = async (req, res) => {
    const { username, password } = req.body

    const patient = await patientLogIn(username, password)

    res.status(200).json(patient)
}

const patientSignUpHandler = async (req, res) => {

    const { username, password, email, firstName, lastName, dni, number, sex, height, civilState } = req.body;

    const newPatient = await patientSignUp(username, password, email, firstName, lastName, dni, number, sex, height, civilState)

    res.status(200).json(newPatient)
}

module.exports = { patientAllHandler, patientLogInHandler, patientSignUpHandler }
