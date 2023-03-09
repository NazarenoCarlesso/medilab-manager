const bcrypt = require('bcrypt')
const { Op } = require('sequelize')
// models
const { models } = require('../db.js')
const { Patient } = models
// helpers
const generateJWT = require('../helpers/generateJWT.js')
const { googleVerify } = require('../helpers/verifyGoogle.js')

const patientAll = async () => {
    let patients = await Patient.findAll({ where: { deleted: false } })

    return patients.map(patient => ({
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        sex: patient.sex,
    }))
}

const patientDetail = async (uid) => {
    let patient = await Patient.findByPk(uid, {
        attributes: { exclude: ['password', 'deleted'] }
    })

    return (patient)
}

const patientWithRoles = async () => {
    let patients = await Patient.findAll({
        where: {
            role: { [Op.ne]: null }
        }
    })

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

const patientChangePassword = async (uid, password) => {
    const patient = await Patient.findByPk(uid)

    patient.password = await bcrypt.hash(password, 10)

    return patient.save()
}

const patientSignUp = async (username, password, email, firstName, lastName, dni, number, sex, height, civilState) => {
    // Generar una contraseña encriptada con bcrypt
    const hash = await bcrypt.hash(password, 10)

    return await Patient.create({
        username, email, password: hash, firstName,
        lastName, dni, number, sex, height, civilState
    })
}

const patientGoogle = async (token) => {
    const { firstName, lastName, email, picture } = await googleVerify(token)

    let patient = await Patient.findOne({ where: { email } })

    if (!patient) {
        patient = await Patient.create({
            username: email.slice(0, 24), email, password: email,
            firstName, lastName
        })
    }

    if (patient.deleted) throw new Error('Paciente eliminado')

    return ({
        token: await generateJWT(patient.id),
        name: `${patient.lastName.toUpperCase()}, ${patient.firstName}`
    })
}

const patientDelete = async (uid) => {
    const patient = await Patient.findByPk(uid)
    patient.deleted = true
    return await patient.save()
}

const patientGenerator = async () => {
    const patients = await fetch(`${process.env.VITAL_API}/apirest/pacientes`)
        .then(response => response.json())

    const password = await bcrypt.hash('password', 10)

    await Promise.all(patients.map(patient => Patient.create({
        id: patient.id,
        firstName: patient.nombres.toLowerCase(),
        lastName: `${patient.apePaterno} ${patient.apeMaterno}`,
        dni: patient.dni,
        height: Number(patient.height),
        sex: patient.sexo,
        civilState: patient.estadoCivil,
        number: patient.telefono,
        email: `${patient.apePaterno.toLowerCase()}${patient.apeMaterno.toLowerCase()}${patient.id}@gmail.com`,
        username: `${patient.apePaterno}${patient.apeMaterno}${patient.id}`,
        password: password
    })))

    await Patient.create({
        id: 999, firstName: 'admin', lastName: 'admin',
        username: 'admin', password: await bcrypt.hash('admin', 10),
        email: 'admin@admin.com', role: 'ADMIN'
    })
}

module.exports = {
    patientAll,
    patientLogIn,
    patientSignUp,
    patientGoogle,
    patientDetail,
    patientDelete,
    patientWithRoles,
    patientChangePassword,
    patientGenerator
}