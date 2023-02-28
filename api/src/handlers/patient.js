const {
    patientAll,
    patientLogIn,
    patientSignUp,
    patientDelete
} = require("../controllers/patient")

const patientAllHandler = async (req, res) => {
    const patients = await patientAll()

    res.status(200).json(patients)
}

const patientLogInHandler = async (req, res) => {
    try {
        const { username, password } = req.body;

        const token = await patientLogIn(username, password);

        res.status(200).json(token);
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(401).json({ message: 'Inicio de sesión fallido' });
    }
}

const patientSignUpHandler = async (req, res) => {
    try {
        const {
            username, password, email,
            firstName, lastName, dni, number,
            sex, height, civilState
        } = req.body

        const newPatient = await patientSignUp(
            username, password, email,
            firstName, lastName, dni, number,
            sex, height, civilState
        )

        if (newPatient.error) {
            return res.status(409).json({ error: newPatient.error });
        }

        return res.status(201).json(newPatient);
    } catch (error) {
        console.error('Error al crear paciente:', error);
        return res.status(500).json({ error: 'Error al crear paciente' });
    }
}

const patientDeleteHandler = async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await patientDelete(id)

        return res.status(200).json({ id, deleted })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: 'Validation error' })
    }
}

module.exports = {
    patientAllHandler,
    patientLogInHandler,
    patientSignUpHandler,
    patientDeleteHandler
}
