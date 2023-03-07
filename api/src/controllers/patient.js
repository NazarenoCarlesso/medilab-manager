const bcrypt = require('bcrypt')
// models
const { models } = require('../db.js')
const { Patient } = models
// helpers
const generateJWT = require('../helpers/generateJWT.js')

const patientAll = async () => {
    let patients = await Patient.findAll({ where: { deleted: false } })

    return patients.map(patient => ({
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        sex: patient.sex,
    }))
}

const patientLogIn = async (username, password) => {
    const patient = await Patient.findOne({ where: { username } })
    // Comparar la contraseña proporcionada con la contraseña
    // almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, patient.password)

    if (!isMatch) throw new Error('Usuario y Contraseña no coinciden')

    return ({
        token: await generateJWT(patient.id),
        name: `${patient.lastName.toUpperCase()}, ${patient.firstName}`
    })
}

const patientSignUp = async (username, password, email, firstName, lastName, dni, number, sex, height, civilState) => {
    // Generar una contraseña encriptada con bcrypt
    const hash = await bcrypt.hash(password, 10)

    return await Patient.create({
        username, email, password: hash, firstName,
        lastName, dni, number, sex, height, civilState
    })
}

const patientDelete = async (uid) => {
    const patient = await Patient.findByPk(uid)
    patient.deleted = true
    return await patient.save()
}

module.exports = {
    patientAll,
    patientLogIn,
    patientSignUp,
    patientDelete
}