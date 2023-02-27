const { models } = require('../db.js')
const { Patient } = models

const patientAll = async () => {
    const patients = await Patient.findAll({
        where: { deleted: false }
    })

    const filter = patients.map(patient => ({
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        sex: patient.sex,
    }))

    return filter
}

const patientLogIn = async (username, password) => {
    const patient = await Patient.findOne({
        where: { username: username, password: password }
    })

    const { id, firstName, lastName } = patient

    return { id, firstName, lastName }
}

module.exports = { patientAll, patientLogIn }