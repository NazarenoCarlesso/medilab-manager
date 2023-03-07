require('dotenv').config()
const { Sequelize } = require('sequelize')

// environment variables
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env

// import models
const patient = require('./models/patient')
const order = require('./models/order')
const payment = require('./models/payment')
const test = require('./models/test')
const item = require('./models/item')
const result = require('./models/result')
const sample = require('./models/sample')
const category = require('./models/test_category')
const review = require('./models/review')

// database connection
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
review(sequelize)

// models destructuring
const {
  Patient, Test, Payment, Item, Result,
  Order, Sample, test_category, Review
} = sequelize.models

// associations
Patient.hasMany(Order)
Order.belongsTo(Patient)

Test.hasMany(Order)
Order.belongsTo(Test)

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

Patient.hasMany(Review)
Review.belongsTo(Patient)

// connection export
module.exports = sequelize