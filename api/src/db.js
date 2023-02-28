require('dotenv').config()
const { Sequelize } = require('sequelize')
const mongoose = require('mongoose');
// environment variables
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env
const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DATABASE } = process.env
// import models
const patient = require('./models/patient')
const order = require('./models/order')
const payment = require('./models/payment')
const test = require('./models/test')
const item = require('./models/item')
const result = require('./models/result')
const sample = require('./models/sample')
const category = require('./models/test_category')
// database connection
mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}`)
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})
// models definitions
patient(sequelize)
order(sequelize)
payment(sequelize)
test(sequelize)
item(sequelize)
result(sequelize)
sample(sequelize)
category(sequelize)
// models destructuring
const { Patient, Test, Payment, Item, Result, Order, Sample, test_category } = sequelize.models
// associations
Patient.belongsToMany(Test, { through: Order })
Test.belongsToMany(Patient, { through: Order })

Test.belongsToMany(Test, { as: 'Bundle', through: 'test_bundle' })

Item.belongsToMany(Test, { through: 'test_item', timestamps: false })
Test.belongsToMany(Item, { through: 'test_item', timestamps: false })

Result.belongsTo(Item)
Result.belongsTo(Order)

Payment.hasMany(Order)
Order.belongsTo(Payment)

Sample.hasMany(Test)
Test.belongsTo(Sample)

test_category.hasMany(Test)
Test.belongsTo(test_category)
// connection export
module.exports = sequelize