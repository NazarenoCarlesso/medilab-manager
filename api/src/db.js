require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env
const patient = require('./models/patient')
const order = require('./models/order')
const payment = require('./models/payment')
const test = require('./models/test')
const item = require('./models/item')
const result = require('./models/result')
const sample = require('./models/sample')
const test_category = require('./models/test_category')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

patient(sequelize)
order(sequelize)
payment(sequelize)
test(sequelize)
item(sequelize)
result(sequelize)
sample(sequelize)
test_category(sequelize)

const { Patient, Test, Payment, Item, Result, Order, Sample, Test_category } = sequelize.models

Patient.belongsToMany(Test, { through: Order })
Test.belongsToMany(Patient, { through: Order })

Test.belongsToMany(Test, { as: 'Bundle', through: 'test_bundle' })

Item.belongsToMany(Test, { through: 'test_item', timestamps: false })
Test.belongsToMany(Item, { through: 'test_item', timestamps: false })

Result.belongsTo(Item)
Result.belongsTo(Order)

Payment.hasMany(Order)

Sample.hasMany(Test)

Test_category.hasMany(Test)

module.exports = sequelize