const { models } = require('../db.js')
const { Order, User, Test } = models

const validateOrder = async (id) => {
    const order = await Order.findByPk(id)

    if (!order) throw new Error('Orden no es válida')
}

const validateTest = async (id) => {
    const test = await Test.findByPk(id)

    if (!test) throw new Error('Test no es válido')
}

const validateUsername = async (username) => {
    const user = await User.findOne({ where: { username } })

    if (!user) throw new Error('Username no es válido')
}

const validateFreeUsername = async (username) => {
    const user = await User.findOne({ where: { username } })

    if (user) throw new Error('Username ya existe')
}

const validateFreeEmail = async (email) => {
    const user = await User.findOne({ where: { email } })

    if (user) throw new Error('Email ya existe')
}

const validateUsernameStatus = async (username) => {
    const user = await User.findOne({ where: { username } })

    if (user) {
        if (user.deleted) throw new Error('Usuario eliminado')
    }
}

const validateAdmin = async (req, res, next) => {
    const user = await User.findByPk(req.uid)

    if (!user) return res.status(401).json({ msg: 'Acceso denegado' })

    user.role !== 'ADMIN' ? res.status(401).json({ msg: 'Acceso denegado' }) : next()
}

module.exports = {
    validateOrder,
    validateTest,
    validateUsername,
    validateFreeUsername,
    validateFreeEmail,
    validateUsernameStatus,
    validateAdmin
}