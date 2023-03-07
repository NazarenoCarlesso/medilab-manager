const { models } = require('../db.js')
const { Order, Patient, Test } = models

const validateOrder = async (id) => {
    const order = await Order.findByPk(id)

    if (!order) throw new Error('Orden no es válida')
}

const validateTest = async (id) => {
    const test = await Test.findByPk(id)

    if (!test) throw new Error('Test no es válido')
}

const validateUsername = async (username) => {
    const patient = await Patient.findOne({ where: { username } })

    if (!patient) throw new Error('Username no es válido')
}

const validateFreeUsername = async (username) => {
    const patient = await Patient.findOne({ where: { username } })

    if (patient) throw new Error('Username ya existe')
}

const validateFreeEmail = async (email) => {
    const patient = await Patient.findOne({ where: { email } })

    if (patient) throw new Error('Email ya existe')
}

const validateUsernameStatus = async (username) => {
    const patient = await Patient.findOne({ where: { username } })

    if (patient) {
        if (patient.deleted) throw new Error('Paciente eliminado')
    }
}

module.exports = {
    validateOrder,
    validateTest,
    validateUsername,
    validateFreeUsername,
    validateFreeEmail,
    validateUsernameStatus
}