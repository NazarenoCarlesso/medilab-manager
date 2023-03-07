const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// models
const { models } = require('../db.js')
const { test_category } = models

const categoryWithTests = async () => {
    const categories = await sequelize.query(
        'SELECT test_categories.id AS "categoryId", test_categories.name FROM test_categories JOIN "Tests" ON test_categories.id="Tests"."testCategoryId" GROUP BY "categoryId" ORDER BY test_categories.name ASC;',
        { type: QueryTypes.SELECT }
    )

    return categories.map(category => category.name)
}

const categoryCreate = async (name) => {
    return await test_category.create({ name })
}

const categoryAll = async () => {
    return await test_category.findAll()
}

module.exports = {
    categoryAll,
    categoryCreate,
    categoryWithTests
}