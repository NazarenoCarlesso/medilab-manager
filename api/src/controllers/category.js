const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// const { models } = require('../db.js')
// const { test_category } = models

const categoryAll = async () => {
    // const categories = await test_category.findAll()
    const categories = await sequelize.query(
        'SELECT test_categories.id AS "categoryId", test_categories.name FROM test_categories JOIN "Tests" ON test_categories.id="Tests"."testCategoryId" GROUP BY "categoryId" ORDER BY test_categories.name ASC;',
        { type: QueryTypes.SELECT }
    )

    const filter = categories.map(category => category.name)

    return filter
}

module.exports = { categoryAll }