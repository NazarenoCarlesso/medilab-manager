const {
    patientAll,
    patientLogIn,
    patientSignUp,
    patientDelete,
    patientWithRoles
} = require('../controllers/patient')

const patientAllHandler = async (req, res) => {
    const patients = await patientAll()

    res.status(200).json(patients)
}

const patientWithRolesHandler = async (req, res) => {
    const patients = await patientWithRoles()

    res.status(200).json(patients)
}

const patientLogInHandler = async (req, res) => {
    const { username, password } = req.body

    try {
        const { token, name } = await patientLogIn(username, password)
        res.header('Access-Control-Expose-Headers', 'token'); //This set a header visible to clients requests
        res.status(200).header('token', token).json({ name })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const patientSignUpHandler = async (req, res) => {
    const { username, password, email, firstName, lastName,
        dni, number, sex, height, civilState } = req.body

    try {
        await patientSignUp(username,
            password, email, firstName, lastName, dni, number,
            sex, height, civilState)
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const patientDeleteHandler = async (req, res) => {
    try {
        await patientDelete(req.uid)
        res.status(200).json({ msg: 'Deleted successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    patientAllHandler,
    patientLogInHandler,
    patientSignUpHandler,
    patientDeleteHandler,
    patientWithRolesHandler
}
