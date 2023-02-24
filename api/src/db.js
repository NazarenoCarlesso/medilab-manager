require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env
const patient = require('./models/patient')
const order = require('./models/order')
const payment = require('./models/payment')
const test = require('./models/test')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

patient(sequelize)
order(sequelize)
payment(sequelize)
test(sequelize)

const { Patient, Order, Test } = sequelize.models

Patient.belongsToMany(Order, { through: 'patient_order', uniqueKey: 'id' })
Order.belongsToMany(Patient, { through: 'patient_order', uniqueKey: 'id' })

Test.belongsToMany(Order, { through: 'order_test' })
Order.belongsToMany(Test, { through: 'order_test' })



module.exports = sequelize