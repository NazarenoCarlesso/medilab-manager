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

const patientSignUpHandler = async (req, res) => {
    const { username, password, email, firstName, lastName, dni, number, sex, height, civilState } = req.body

    const newPatient = await patientSignUpHandler(username, password, email, firstName, lastName, dni, number, sex, height, civilState)

    res.status(200).json(newPatient)
}

module.exports = { patientAllHandler, patientLogInHandler, patientSignUpHandler }

/**password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        number: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        sex: {
            type: DataTypes.STRING(1),
            allowNull: true
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        civilState: {
            type: DataTypes.STRING(25),
            allowNull: true
        }, */