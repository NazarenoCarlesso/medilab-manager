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

module.exports = { patientAll }