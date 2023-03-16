const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// models
const { models } = require('../db.js')
const { test_category, Test } = models

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

//////////////////////////////////////////////////////////////

//------------------>ANTES<------------------------

// const categoryAll = async () => {
//     return await test_category.findAll()
// }
//////////////////////////////////////////////////////////////
const categoryAll = async (page = 1, limit = 10) => {
    return await test_category.findAll({
        limit: limit,
        offset: ((page - 1) * limit)
    })
}
//////////////////////////////////////////////////////////////


const categoryDelete = async (id, newId) => {
    const tests = await Test.findAll({ where: { testCategoryId: id } })

    tests.map(test => test.testCategoryId = newId)

    await Promise.all(tests.map(test => test.save()))

    const category = await test_category.findByPk(id)

    return await category.destroy()
}

const categoryUpdate = async (id, name) => {
    const category = await test_category.findByPk(id)

    category.name = name
    return await category.save()
}

module.exports = {
    categoryAll,
    categoryCreate,
    categoryDelete,
    categoryUpdate,
    categoryWithTests
}