const { Op, QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// models
const { models } = require('../db.js')
const { Test, Sample, test_category } = models

const testAll = async (limit) => {
    const tests = await Test.findAll({
        include: [
            { model: Sample, required: true },
            { model: test_category, required: true }
        ]
    })

    return tests.map(test => ({
        id: test.id,
        name: test.name,
        description: test.description,
        price: test.price,
        sample: test.Sample.name,
        category: test.test_category.name
    })).slice(0, limit)
}

const testDetail = async (pk) => {
    const test = await Test.findByPk(pk)
    const sample = await test.getSample()
    const category = await test.getTest_category()
    const { id, name, description, price, time } = test

    return {
        id, name, description, price, time,
        sample: sample.name,
        category: category.name
    }
}

const testSearch = async (search, limit) => {
    const tests = await Test.findAll({
        include: [
            { model: Sample, required: true },
            { model: test_category, required: true }
        ],
        where: {
            [Op.or]: [{
                name: { [Op.iLike]: `%${search}%` }
            }, {
                description: { [Op.iLike]: `%${search}%` }
            }]
        }
    })

    return tests.map(test => ({
        id: test.id,
        name: test.name,
        description: test.description,
        price: test.price,
        sample: test.Sample.name,
        category: test.test_category.name
    })).slice(0, limit)
}

const testByOrders = async (limit) => {
    const tests = await sequelize.query(
        'SELECT "Tests".id AS "testId", name, description, price FROM "Tests" LEFT JOIN "Orders" ON "Tests".id="Orders"."TestId" GROUP BY "testId" ORDER BY COUNT("Tests".id) DESC;',
        { type: QueryTypes.SELECT }
    )

    console.log(tests)

    return tests.map(test => ({
        id: test.testId,
        name: test.name,
        description: test.description,
        price: test.price,
        // sample: test.Sample.name,
        // category: test.test_category.name
    })).slice(0, limit)
}

module.exports = {
    testAll,
    testDetail,
    testSearch,
    testByOrders
}