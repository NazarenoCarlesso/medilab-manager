const { models } = require('../db.js')
const { Patient } = models

const patientAll = async () => {
    return await Patient.findAll()
}

module.exports = { patientAll }